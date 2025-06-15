let shop = document.getElementById("shop")



let basket = JSON.parse(localStorage.getItem("data")) || []


let generateShop = () => {
    return (shop.innerHTML= shopItemsData
        .map((x)=>{
            let { id, img, title, description, genre, released, ageRating, price } = x;
            let search = basket.find((x)=>x.id === id) || []
           return `
               <div id=product-id-${id} class="item">
                    <img width="296" src=${img} alt="">
                    <div class="details">
                        <a href="product/index.html">
                          <h3>${title}</h3>
                        </a>
                        <p>${description}</p>
                        <h4>${genre}</h4>
                        <h4>${released}</h4>
                        <h4>${ageRating}</h4>
                        <div class="price-quantity">
                            <h2>$ ${price}</h2>
                            <div class="buttons">
                                <i onclick="decrement('${id}')" class="bi bi-dash"></i>
                                <div id=${id} class="quantity">
                                ${search.item === undefined? 0: search.item}
                                </div>
                                <i onclick="increment('${id}')" class="bi bi-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
    `
    }).join(""));
};

generateShop();

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

    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x)=>x.id === id)
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item
};
