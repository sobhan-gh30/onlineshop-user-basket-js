//I did not use any databases in this mini project
//I stored my data into an array
const guitars = [
    {"id": 1, "Brand": "Gibson", "Model": "Les Paul Access", "imgCode": "111.webp", "price": 5499 , "count":1},
    {"id": 2, "Brand": "Epiphone", "Model": "Les Paul Standard 60th", "imgCode": "212.png", "price": 699 , "count":1},
    {"id": 3, "Brand": "Gibson", "Model": "SG standard 61st", "imgCode": "123.png", "price": 2499 , "count":1},
    {"id": 4, "Brand": "Gibson", "Model": "ES-335", "imgCode": "134.webp", "price": 1249 , "count":1},
    {"id": 5, "Brand": "Fender", "Model": "Tele player", "imgCode": "325.png", "price": 1999 , "count":1},
    {"id": 6, "Brand": "Fender", "Model": "Strar american pro II", "imgCode": "314.png", "price": 1999 , "count":1},
    {"id": 7, "Brand": "Gretch", "Model": "White Falcon", "imgCode": "417.png", "price": 2349 , "count":1},
    {"id": 8, "Brand": "Hagstrom", "Model": "Fantomen White", "imgCode": "518.png", "price": 2500 , "count":1},
    {"id": 9, "Brand": "Hagstrom", "Model": "Fantomen Black", "imgCode": "519.png", "price": 2500 , "count":1},
]

let container, totalPrice, basketTable, userBasket , buyBtn
userBasket = []
container = document.querySelector(".container")
totalPrice = document.getElementById("totalPrice")
buyBtn = document.querySelector('.button')

guitars.forEach((event) => {
    container.insertAdjacentHTML("beforeend" ,
        `
         <div class="shopping__cart">
            <div class="shopping__cart-img">
                <img class="shopping__cart-img-tag" src="img/${event.imgCode}" alt="Guitar">
            </div>
            <div class="shopping__cart-info">
                <h3>${event.Brand} ${event.Model}</h3>
                <h4>${event.price}$</h4>
                <button onclick="addToUserBasket(${event.id})">Buy Now</button>
            </div>
         </div>`
    )
})
function addToUserBasket(productID) {
    let mainGuitar;
    mainGuitar = guitars.find((product) => {
        return product.id === productID
    })
    userBasket.push(mainGuitar)
    showUserBasket(userBasket)
    calcTotalPrice(userBasket)
}
function showUserBasket(basket) {
    let basketProducts, basketProduct, basketImg, basketName, basketPrice, clearBasket, clearBasketBtn

    basketProducts = document.querySelector(".basket__products");
    clearBasket = document.querySelector(".clearBasket")

    basketProducts.innerHTML = ""
    clearBasket.innerHTML = ""

    userBasket.forEach((guitar) => {

        basketProducts.insertAdjacentHTML("beforeend",
            `
                    <div class="basket__product">
                        <img src="img/${guitar.imgCode}">
                        <h3>${guitar.Brand} ${guitar.Model}</h3>
                        <input class="ProductQuantity" onchange="inputChange(event , ${guitar.id})" value="${guitar.count}" type="number" min="1">
                        <div>${guitar.price}$</div>
                        <button onclick="clearItem(${guitar.id})" class="clearBasket__btn">Crear Item</button>
                    </div>
            `)
    })
    clearBasket.insertAdjacentHTML("beforeend" , `<button onclick="clearUserBasket(userBasket)" class="clearBasket__btn">Clear All</button>`)
}

function inputChange(event , guitar){
    let newQuantity = event.target.value;
    priceCalculation(guitar, newQuantity);
}

function calcTotalPrice (userBasketArray) {
    let totalPriceValue = 0

    userBasketArray.forEach(function (product) {
        totalPriceValue += product.count * product.price
    })

    totalPrice.innerHTML = `${totalPriceValue}$`
}

function priceCalculation(guitar, quantity){
    userBasket.forEach(function (product) {
        if (product.id === guitar) {
            product.count =  Number(quantity);
        }
    })
    calcTotalPrice(userBasket)
}
function clearUserBasket(){
    userBasket = []
    showUserBasket(userBasket)
    totalPrice.innerHTML = "0$"
}
function clearItem(ID){
    userBasket = userBasket.filter((product)=>{
        return product.id !== ID
    })
    showUserBasket(userBasket)
    calcTotalPrice(userBasket)
}