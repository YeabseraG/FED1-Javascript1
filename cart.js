let label = document.getElementById('label')
let ShoppingCart = document.getElementById('shopping-cart')
let basket = JSON.parse(localStorage.getItem("data")) || []


let generateCartItems = () => {
    if(basket.length !==0){
        return (ShoppingCart.innerHTML = basket
            .map((x) => {
                console.log(x);
                let { id, item } = x;
                let search = shopItemsData.find((y)=> y.id === id) || [];
                return `
                <div class="cart-item">
                <img width="200" src=../${search.img} alt="" /> 
                  <div class="details">
                     <div class="title-price-x">
                       <h4 class="title-price">
                         <p>${search.title}</p>
                         <p class="cart-item-price">$ ${search.price}</p>
                       </h4>

                     </div>
                     
                     <div class="buttons">
                                <i onclick="decrement('${id}')" class="bi bi-dash"></i>
                                <div id=${id} class="quantity">${item}</div>
                                <i onclick="increment('${id}')" class="bi bi-plus"></i>
                    </div>
                     
                     <h2>$ ${item * search.price}</h2>
                  </div>
                </div>
                `;
        }).join(""));
    }
    else {
        ShoppingCart.innerHTML = ``
        label.innerHTML = `
        <h1>Cart is Empty</h1>
        <a href="../index.html">
          <button class="HomeBtn">Back to Home</button>
        </a>
        `;
    }
};

generateCartItems();

let increment = (id) => {
    let search = basket.find ((x)=> x.id === id)

    if(search === undefined){
        basket.push({
        id: id,
        item: 1,
    })
    }
    else{
        search.item += 1;
    }
    
    generateCartItems();
    update(id);
    localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
    let search = basket.find ((x)=> x.id === id);

    if(search === undefined) return
    else if(search.item === 0) return
    else {
        search.item -= 1;
    }
    
    update(id);
    basket = basket.filter((x) => x.item !== 0);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x)=>x.id === id)
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item
    TotalAmount();
};

let clearCart = () => {
    basket = [];
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
}


let TotalAmount = () => {
    if(basket.length !==0){
        let amount = basket.map((x)=>{
          let { item, id } = x;
          let search = shopItemsData.find((y)=> y.id === id) || [];
          return item * search.price;
        }).reduce((x,y) => x + y, 0);
    
        label.innerHTML = `
        <h1>Total Bill : $ ${amount}</h1>
        <a href="../checkout/confirmation/index.html">
          <button class="checkout">Checkout</button>
        </a>
        <button onclick="clearCart()" class="removeAll">Clear Cart</button>

        `;
    }
    else return
}

TotalAmount();