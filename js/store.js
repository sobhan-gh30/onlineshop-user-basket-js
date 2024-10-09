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

let container, totalPrice, basketTable, userBasket
userBasket = []
container = document.querySelector(".container")
totalPrice = document.getElementById("totalPrice")

guitars.forEach((event) => {
    let shoppingCart, shoppingCartImg, shoppingCartInfo, shoppingCartInfoh3, shoppingCartInfoh4, buyBtn

    shoppingCart = document.createElement("div");
    shoppingCart.classList.add("shopping__cart");

    shoppingCartImg = document.createElement("div");
    shoppingCartImg.classList.add("shopping__cart-img");

    shoppingCartImgTag = document.createElement("img");
    shoppingCartImgTag.classList.add("shopping__cart-img-tag");
    shoppingCartImgTag.setAttribute("src", `img/${event.imgCode}`);
    shoppingCartImgTag.setAttribute("alt", `Guitar`);
    shoppingCartImg.append(shoppingCartImgTag)

    shoppingCartInfo = document.createElement("div")
    shoppingCartInfo.classList.add("shopping__cart-info")

    shoppingCartInfoh3 = document.createElement('h3')
    shoppingCartInfoh3.innerHTML = `${event.Brand} ${event.Model}`

    shoppingCartInfoh4 = document.createElement('h4')
    shoppingCartInfoh4.innerHTML = `${event.price}$`

    buyBtn = document.createElement('button')
    buyBtn.innerHTML = `Buy Now`
    buyBtn.addEventListener("click", () => {
        addToUserBasket(event.id);
    })
    shoppingCartInfo.append(shoppingCartInfoh3, shoppingCartInfoh4, buyBtn)
    shoppingCart.append(shoppingCartImg, shoppingCartInfo)
    container.append(shoppingCart)
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
        basketProduct = document.createElement("div");
        basketProduct.classList.add("basket__product")

        basketImg = document.createElement("img");
        basketImg.setAttribute("src", `img/${guitar.imgCode}`)

        basketName = document.createElement("h3");
        basketName.textContent = `${guitar.Brand} ${guitar.Model}`

        basketPrice = document.createElement("div");
        basketPrice.textContent = `${guitar.price}$`

        productQuantity = document.createElement("input");
        productQuantity.classList.add("ProductQuantity")
        productQuantity.value = guitar.count
        productQuantity.setAttribute("type" , "number")
        productQuantity.addEventListener("change", (event) => {
            let newQuantity = event.target.value;
            priceCalculation(guitar.id, newQuantity); // تغییر تعداد کالا
        });

        clearItemBtn = document.createElement("button")
        clearItemBtn.innerHTML = "Crear Item"
        clearItemBtn.classList.add("clearBasket__btn")
        clearItemBtn.addEventListener("click",()=>{
            clearItem(guitar.id);
        })
        basketProduct.append(basketImg, basketName, productQuantity, basketPrice, clearItemBtn);
        basketProducts.append(basketProduct);
    })
    clearBasketBtn = document.createElement("button")
    clearBasketBtn.innerHTML = "Clear All"
    clearBasketBtn.classList.add("clearBasket__btn")
    clearBasket.append(clearBasketBtn)

    clearBasket.addEventListener("click", () => {
        clearUserBasket(userBasket)
    })
}
function calcTotalPrice (userBasketArray) {
    let totalPriceValue = 0

    userBasketArray.forEach(function (product) {
        totalPriceValue += product.count * product.price
    })

    totalPrice.innerHTML = `${totalPriceValue}$`
}

function priceCalculation(guitar, quantity){
    console.log("product id: " + guitar + ' new count: ' + quantity);

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