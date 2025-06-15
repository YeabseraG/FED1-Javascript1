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


let generateShop = () => {
    return (shop.innerHTML= shopItemsData
        .map((x)=>{
           return `
               <div id=product-id-${x.id} class="item">
                    <img width="295" src=${x.img} alt="">
                    <div class="details">
                        <h3>${x.title}</h3>
                        <p>${x.description}</p>
                        <h4>${x.genre}</h4>
                        <h4>${x.released}</h4>
                        <h4>${x.ageRating}</h4>
                        <div class="price-quantity">
                            <h2>$ ${x.price}</h2>
                            <div class="buttons">
                                <i onclick="decrement(${x.id})" class="bi bi-dash"></i>
                                <div id=${x.id} class="quantity">0</div>
                                <i onclick="increment(${x.id})" class="bi bi-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
    `
    }).join(""));
};

generateShop();

let increment = () => {
    console.log("increment");
};
let decrement = () => {
    console.log("decrement");
};
let update = () => {};
