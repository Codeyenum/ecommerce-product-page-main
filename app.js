let cartBtn = document.querySelector(".cart_icon");
let cartCard = document.querySelector(".cart_card");
let cartItems = cartBtn.children[0];
let sumTotal = document.querySelector(".sum-total");

cartBtn.addEventListener("click", () => {
    cartCard.classList.toggle("hide");
})

// let thumbnails = document.querySelectorAll(".thumbnail");
let productImg = document.querySelector(".product");
let lightBox = document.querySelector(".light-box");
let lightBoxThumbnails = document.querySelectorAll(".thumbnail-two");
let productTwoImg = document.querySelectorAll(".product-two");


productImg.addEventListener("click", () => {
    lightBox.classList.remove("hide");
    
    for (let thumbnailTwo of lightBoxThumbnails) {
        thumbnailTwo.addEventListener("click", () => {
            for (let thumbnailTwo of lightBoxThumbnails) {
                thumbnailTwo.classList.remove("current_thumbnail-two");
            }
            thumbnailTwo.classList.toggle("current_thumbnail-two");
            let currentSlide = Array.prototype.indexOf.call(lightBoxThumbnails, thumbnailTwo);
            for (let productImg of productTwoImg) {
                productImg.classList.remove("current_slide-two");
                if (productImg.classList.length < 2 ) {
                    productImg.classList.add("hide");
                }                
            }
            productTwoImg[`${currentSlide}`].classList.toggle("hide")
            productTwoImg[`${currentSlide}`].classList.toggle("current_slide-two")            
        })
    }
})

let closeBtn = document.querySelector(".close_btn");

closeBtn.addEventListener("click", () => {
    lightBox.classList.add("hide");
})

let nextBtnTwo = document.querySelector(".next_btn-two");
let prevBtnTwo = document.querySelector(".prev_btn-two");

nextBtnTwo.addEventListener("click", () => {
    let currentProduct = document.querySelector(".current_slide-two");
    let nextProduct = currentProduct.nextElementSibling;
    let productContainer = currentProduct.parentElement      

    if (nextProduct != productContainer.children[5]) {
        currentProduct.classList.add("hide");
        currentProduct.classList.remove("current_slide-two");
        nextProduct.classList.remove("hide");
        nextProduct.classList.add("current_slide-two");  
        if (nextProduct.nodeName === "IMG") {
            let currentSlide = nextProduct.src.charAt(43) - 1; 
            for (let thumbnailTwo of lightBoxThumbnails) {
                thumbnailTwo.classList.remove("current_thumbnail-two");
            }      
            lightBoxThumbnails[`${currentSlide}`].classList.toggle("current_thumbnail-two")
        }                    
    }
})

prevBtnTwo.addEventListener("click", () => {    
    let currentProduct = document.querySelector(".current_slide-two");
    let upperBound = document.querySelector(".close_btn");
    let prevProduct = currentProduct.previousElementSibling;        

    if (prevProduct !== upperBound) {        
        currentProduct.classList.remove("current_slide-two");  
        currentProduct.classList.add("hide");      
        prevProduct.classList.add("current_slide-two");
        prevProduct.classList.remove("hide"); 
        if (prevProduct.nodeName === "IMG") {
            let currentSlide = prevProduct.src.charAt(43) - 1; 
            for (let thumbnailTwo of lightBoxThumbnails) {
                thumbnailTwo.classList.remove("current_thumbnail-two");
            }      
            lightBoxThumbnails[`${currentSlide}`].classList.toggle("current_thumbnail-two")
        }
    }
})

let nextBtn = document.querySelector(".next_btn");
let prevBtn = document.querySelector(".prev_btn");

nextBtn.addEventListener("click", () => {
    let currentProduct = document.querySelector(".current_slide");
    let nextProduct = currentProduct.nextElementSibling;

    if (nextProduct != currentProduct.parentElement.children[4]) {
        currentProduct.classList.add("hide");
        currentProduct.classList.remove("current_slide");
        nextProduct.classList.remove("hide");
        nextProduct.classList.add("current_slide");
    }
})

prevBtn.addEventListener("click", () => {
    let currentProduct = document.querySelector(".current_slide");
    let prevProduct = currentProduct.previousElementSibling;

    if (prevProduct !== null) {
        currentProduct.classList.remove("current_slide");
        prevProduct.classList.add("current_slide");
    }
})


let add = document.querySelector(".plus");
let subtract = document.querySelector(".minus");
let quantityBox = document.querySelector(".quantity_container");
let quantity = 0;

add.addEventListener("click", () => {
    quantity++;
    quantityBox.children[1].innerText = quantity;
    cartItems.innerText = quantity;
})
subtract.addEventListener("click", () => {
    if (quantity > 0) {
        quantity--;
    }
    quantityBox.children[1].innerText = quantity;
    cartItems.innerText = quantity;
})

let addToCart = document.querySelector(".cart_btn");

let checkoutBtn = document.querySelector(".checkout_btn");
let cartContent = document.querySelector(".cart_content");
let emptyCartText = document.querySelector(".order-details > p");
let emptyCartIcons = document.querySelectorAll(".empty-cart");

addToCart.addEventListener("click", () => {
    sumTotal.innerHTML = `$125.00 x ${quantity} <strong>$${125.00 * quantity}.00</strong>`
    if (quantity > 0) {
        cartItems.classList.toggle("hide");
    }
    cartContent.classList.toggle("hide");
    emptyCartText.classList.toggle("hide")
    checkoutBtn.classList.toggle("hide");
})

for (let emptyIcon of emptyCartIcons) {
    emptyIcon.addEventListener("click", () => {
        quantityBox.children[1].innerText = 0;
        cartContent.classList.toggle("hide");
        emptyCartText.classList.toggle("hide")
        checkoutBtn.classList.toggle("hide");
        quantity = 0;
        cartItems.classList.toggle("hide");
    })
}

cartCard.addEventListener("mouseleave", () => {
    cartCard.classList.add("hide");
})




