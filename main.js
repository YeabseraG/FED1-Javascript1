let shop = document.getElementById("shop")

let shopItemsData = [{
      id: "ded6041a-622f-4fb4-81e4-96fcfdad4dff",
      title: "Ping Pong Championship",
      description: "Enter the world of Ping Pong Championship and compete against the world's best.",
      genre: "Sports",
      released: "2005",
      ageRating: "3+",
      price: 14.99,
      discountedPrice: 4.79,
      onSale: true,
      img: "images/PingPong.jpg",
      tags: ["gamehub", "game"],
      favorite: true
    },
    {
      id: "2ace4e1d-cad7-4d35-8d59-6c9ac3e3eaf8",
      title: "Super Duper",
      description: "Celebrate some of the world's super duper Superheroes with augmented reality.",
      genre: "Adventure",
      released: "2006",
      ageRating: "3+",
      price: 15.99,
      discountedPrice: 15.99,
      onSale: false,
      img: "images/SuperDuper.jpg",
      tags: ["gamehub", "game"],
      favorite: true
      }
      ]

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
                        <h3>${title}</h3>
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
    
    // console.log(basket);
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
    // console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x)=>x.id === id)
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item
};
