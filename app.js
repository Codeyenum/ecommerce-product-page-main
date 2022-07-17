let cartBtn = document.querySelector(".cart_icon");
let cartCard = document.querySelector(".cart_card");
let orderQuantity = cartBtn.children[0];
let sumTotal = document.querySelector(".sum-total");

cartBtn.addEventListener("click", () => {
    cartCard.classList.toggle("hide");
})


let productImg = document.querySelector(".product");
let lightBox = document.querySelector(".light-box");
let slideThumbnails = document.querySelectorAll(".slide-thumbnail");
let productSlide = document.querySelectorAll(".product_slide");


productImg.addEventListener("click", () => {
    lightBox.classList.remove("hide");
    
    for (let slideThumbnail of slideThumbnails) {
        slideThumbnail.addEventListener("click", () => {
            for (let slideThumbnail of slideThumbnails) {
                slideThumbnail.classList.remove("current_slide-thumbnail");
            }
            slideThumbnail.classList.toggle("current_slide-thumbnail");
            let slideIndex = Array.prototype.indexOf.call(slideThumbnails, slideThumbnail);
            for (let slide of productSlide) {
                slide.classList.remove("current_slide");
                if (slide.classList.length < 2 ) {
                    slide.classList.add("hide");
                }                
            }
            productSlide[`${slideIndex}`].classList.toggle("hide")
            productSlide[`${slideIndex}`].classList.toggle("current_slide")            
        })
    }
})

let closeBtn = document.querySelector(".close_btn");

closeBtn.addEventListener("click", () => {
    lightBox.classList.add("hide");
})

let nextSlide = document.querySelector(".next_slide");
let prevSlide = document.querySelector(".prev_slide");

nextSlide.addEventListener("click", () => {
    let currentSlide = document.getElementsByClassName("current_slide");
    let nextProduct = currentSlide.nextElementSibling;
    let productContainer = currentSlide.parentElement;

    if (nextProduct != productContainer.children[5]) {
        currentSlide.classList.add("hide");
        currentSlide.classList.remove("current_slide");
        nextProduct.classList.remove("hide");
        nextProduct.classList.add("current_slide");  
        if (nextProduct.nodeName === "IMG") {
            let currentThumbnail = nextProduct.src.charAt(43) - 1; 
            for (let slideThumbnail of slideThumbnails) {
                slideThumbnail.classList.remove("current_slide-thumbnail");
            }      
            slideThumbnails[`${currentThumbnail}`].classList.toggle("current_slide-thumbnail")  
            console.log(currentThumbnail)
        }                    
    }
})

prevSlide.addEventListener("click", () => {    
    let currentSlide = document.getElementsByClassName("current_slide");
    let upperBound = document.querySelector(".close_btn");
    let prevProduct = currentSlide.previousElementSibling;        

    if (prevProduct !== upperBound) {        
        currentSlide.classList.remove("current_slide");  
        currentSlide.classList.add("hide");      
        prevProduct.classList.add("current_slide");
        prevProduct.classList.remove("hide"); 
        if (prevProduct.nodeName === "IMG") {
            let currentThumbnail = prevProduct.src.charAt(43) - 1; 
            for (let slideThumbnail of slideThumbnails) {
                slideThumbnail.classList.remove("current_slide-thumbnail");
            }      
            slideThumbnails[`${currentThumbnail}`].classList.toggle("current_slide-thumbnail")
        }
    }
})

let nextBtn = document.querySelector(".next_btn");
let prevBtn = document.querySelector(".prev_btn");
let currentImg = document.querySelector(".current_img");

nextBtn.addEventListener("click", () => {    
    let nextProduct = currentImg.nextElementSibling;

    if (nextProduct != currentImg.parentElement.children[4]) {
        currentImg.classList.add("hide");
        currentImg.classList.remove("current_img");
        nextProduct.classList.remove("hide");
        nextProduct.classList.add("current_img");
    }
})

prevBtn.addEventListener("click", () => {    
    let prevProduct = currentImg.previousElementSibling;

    if (prevProduct !== null) {
        currentImg.classList.remove("current_img");
        prevProduct.classList.add("current_img");
    }
})


let add = document.querySelector(".plus");
let subtract = document.querySelector(".minus");
let quantityBox = document.querySelector(".quantity_container");
let quantity = 0;

add.addEventListener("click", () => {
    quantity++;
    quantityBox.children[1].innerText = quantity;
    orderQuantity.innerText = quantity;
})
subtract.addEventListener("click", () => {
    if (quantity > 0) {
        quantity--;
    }
    quantityBox.children[1].innerText = quantity;
    orderQuantity.innerText = quantity;
})

let addToCart = document.querySelector(".add-to-cart_btn");

let checkoutBtn = document.querySelector(".checkout_btn");
let cartContent = document.querySelector(".cart_content");
let emptyCartText = document.querySelector(".cart_card-content > p");
let emptyCartIcons = document.querySelectorAll(".empty-cart");

addToCart.addEventListener("click", () => {
    sumTotal.innerHTML = `$125.00 x ${quantity} <strong>$${125.00 * quantity}.00</strong>`
    if (quantity > 0) {
        orderQuantity.classList.toggle("hide");
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
        orderQuantity.classList.toggle("hide");
    })
}

cartCard.addEventListener("mouseleave", () => {
    cartCard.classList.add("hide");
})




