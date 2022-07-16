let cartBtn = document.querySelector(".cart_icon");
let cartCard = document.querySelector(".cart_card");

cartBtn.addEventListener("click", () => {
    cartCard.classList.toggle("hide");
})

let thumbnails = document.querySelectorAll(".thumbnail");
let productImg = document.querySelector(".product");

for (let thumbnail of thumbnails) {
    thumbnail.addEventListener("click", () => {        
        for (let thumbnail of thumbnails) {            
            thumbnail.classList.remove("current_thumbnail");             
        }
        thumbnail.classList.toggle("current_thumbnail"); 
        let currentSlide = Array.prototype.indexOf.call(thumbnails, thumbnail);                
        productImg.src = `./images/image-product-${currentSlide + 1}.jpg`
    })
}

let add = document.querySelector(".plus");
let subtract = document.querySelector(".minus");
let quantityBox = document.querySelector(".quantity_container");
let quantity = 0;

add.addEventListener("click", () => {
    quantity ++;    
    quantityBox.children[1].innerText = quantity;
    // return quantity;    
})
subtract.addEventListener("click", () => {
    if (quantity > 0) {
        quantity --;
    }    
    quantityBox.children[1].innerText = quantity;
    // return quantity;    
})





