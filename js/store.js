//I did not use any databases in this mini project
//I stored my data into an array

const guitars = [
    {"id" : 1 , "Brand" : "Gibson" , "Model" : "Les Paul Access" , "imgCode" : "111.webp" , "price" : 5499},
    {"id" : 2 , "Brand" : "Epiphone" , "Model" : "Les Paul Standard 60th" , "imgCode" : "212.png" , "price" : 699 },
    {"id" : 3 , "Brand" : "Gibson" , "Model" : "SG standard 61st" , "imgCode" : "123.png" , "price" : 2499},
    {"id" : 4 , "Brand" : "Gibson" , "Model" : "ES-335" , "imgCode" : "134.webp" , "price" : 1249 },
    {"id" : 5 , "Brand" : "Fender" , "Model" : "Tele player" , "imgCode" : "325.png" , "price" : 1999},
    {"id" : 6 , "Brand" : "Fender" , "Model" : "Strar american pro II" , "imgCode" : "314.png" , "price" : 1999},
]
let container , totalPrice , basketTable , userBasket
container = document.querySelector(".container")
userBasket = []



guitars.forEach((event)=>{
    let  shoppingCart ,  shoppingCartImg , shoppingCartInfo , shoppingCartInfoh3 , shoppingCartInfoh4 , buyBtn

    shoppingCart = document.createElement("div");
    shoppingCart.classList.add("shopping__cart");

    shoppingCartImg = document.createElement("div");
    shoppingCartImg.classList.add("shopping__cart-img");

    shoppingCartImgTag = document.createElement("img");
    shoppingCartImgTag.classList.add("shopping__cart-img-tag");
    shoppingCartImgTag.setAttribute("src" , `img/${event.imgCode}`);
    shoppingCartImgTag.setAttribute("alt" , `Guitar`);
    shoppingCartImg.append(shoppingCartImgTag)


    shoppingCartInfo = document.createElement("div")
    shoppingCartInfo.classList.add("shopping__cart-info")

    shoppingCartInfoh3 = document.createElement('h3')
    shoppingCartInfoh3.innerHTML = `${event.Brand} ${event.Model}`

    shoppingCartInfoh4 = document.createElement('h4')
    shoppingCartInfoh4.innerHTML = `${event.price}$`

    buyBtn = document.createElement('button')
    buyBtn.innerHTML = `Buy Now`
    buyBtn.addEventListener("click" , ()=>{
        addToUserBasket(event.id);
    })
    shoppingCartInfo.append(shoppingCartInfoh3)
    shoppingCartInfo.append(shoppingCartInfoh4)
    shoppingCartInfo.append(buyBtn)

    shoppingCart.append(shoppingCartImg)
    shoppingCart.append(shoppingCartInfo)

    container.append(shoppingCart)

})

function addToUserBasket(productID){
    let mainGuitar;
    mainGuitar = guitars.find((product)=>{
        return product.id === productID
    })
    userBasket.push(mainGuitar)
    showUserBasket(userBasket)
}

function showUserBasket(basket){
    let basketProducts, basketProduct, basketImg, basketName,  basketPrice

    basketProducts = document.querySelector(".basket__products");
    basketProducts.innerHTML = ""

    userBasket.forEach((guitar)=>{
        basketProduct = document.createElement("div");
        basketProduct.classList.add("basket__product")

        basketImg = document.createElement("img");
        basketImg.setAttribute("src" , `img/${guitar.imgCode}`)

        basketName = document.createElement("h3");
        basketName.textContent = `${guitar.Brand} ${guitar.Model}`

        basketPrice = document.createElement("div");
        basketPrice.textContent = `${guitar.price}$`

        basketProduct.append(basketImg, basketName, basketPrice);
        basketProducts.append(basketProduct);
    })
}