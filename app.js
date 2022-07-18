// Mobile menu 
let menuButton = document.querySelector(".menu_btn");
let menuCloseButton = document.querySelector(".menu-close_btn");
let mobileNav = document.querySelector(".mobile_nav");
let mobileLightBox = document.querySelector(".mobile-light-box");

// Cart elements
let cartBtn = document.querySelector(".cart_icon");
let cartCard = document.querySelector(".cart_card");
let orderQuantity = cartBtn.children[0];
let sumTotal = document.querySelector(".sum-total");
let addToCart = document.querySelector(".add-to-cart_btn");
let checkoutBtn = document.querySelector(".checkout_btn");
let cartContent = document.querySelector(".cart_content");
let emptyCartText = document.querySelector(".cart_card-content > p");
let binItemButton = document.querySelector(".delete_icon");

// Mobile carousel elements 
let productImg = document.querySelector(".product");
let nextBtn = document.querySelector(".next_btn");
let prevBtn = document.querySelector(".prev_btn");

// quantity selection elements
let add = document.querySelector(".plus");
let subtract = document.querySelector(".minus");
let quantityBox = document.querySelector(".quantity_container");
let quantity = 0;

// Lightbox elements
let lightBox = document.querySelector(".light-box");
let lightBoxCloseBtn = document.querySelector(".light-box-close_btn");
let nextSlide = document.querySelector(".next_slide");
let prevSlide = document.querySelector(".prev_slide");
let productSlide = document.querySelectorAll(".product_slide");
let slideThumbnails = document.querySelectorAll(".slide-thumbnail");

// function to display or hide mobile menu
const menuFunction = (actionButton) => {
    actionButton.addEventListener("click", () => {
        mobileNav.classList.toggle("show");
        mobileLightBox.classList.toggle("hide");
    })
}
menuFunction(menuButton);
menuFunction(menuCloseButton);

// function to clear cart card and reset values
let emptyCartFunc = () => {    
    cartContent.classList.toggle("hide");    
    checkoutBtn.classList.toggle("hide");
    emptyCartText.classList.toggle("hide")
    orderQuantity.classList.toggle("hide");
    quantity = 0;
    quantityBox.children[1].innerText = 0;    
}

// function to clear thumbnail-active effect
let removeThumbnailClass = () => {
    for (let slideThumbnail of slideThumbnails) {
        slideThumbnail.classList.remove("current_slide-thumbnail");
    }
}

// function to switch mobile slides
let displaySlide = (product, currentProduct, bounds) => {
    if (product !== bounds) {
        currentProduct.classList.add("hide");
        currentProduct.classList.remove("current_img");
        product.classList.add("current_img");
    }
}

// function to switch lightbox slides
let moveTo = (product, currentProduct, bounds) => {
    if (product !== bounds) {        
        currentProduct.classList.add("hide");
        currentProduct.classList.remove("current_slide");        
        product.classList.remove("hide");
        product.classList.add("current_slide");
        let index = Array.prototype.indexOf.call(product.parentElement.children, product);

        if (product.nodeName === "IMG") {
            removeThumbnailClass();
            slideThumbnails[`${index - 1}`].classList.toggle("current_slide-thumbnail")
        }
    }
}

// display cart card
cartBtn.addEventListener("click", () => {
    cartCard.classList.toggle("hide");
    // overwritten when cart not empty
    emptyCartText.innerText = "Your cart is empty";
})

// reduce quantity then reset cart card when = 0
binItemButton.addEventListener("click", () => {    
    if (quantity > 1) {
        quantity--;
        sumTotal.innerHTML = `$125.00 x ${quantity} <strong>$${125.00 * quantity}.00</strong>`
        orderQuantity.innerText = quantity;
    } else emptyCartFunc();
})

// clear cart card and overwrite empty cart text
checkoutBtn.addEventListener("click", () => {
    emptyCartFunc();
    emptyCartText.innerText = "Your order has been placed"
})

// mobile switch to next slide
nextBtn.addEventListener("click", () => {
    let currentImg = document.querySelector(".current_img");
    let nextProduct = currentImg.nextElementSibling;
    let limit = currentImg.parentElement.children[4]

    displaySlide(nextProduct, currentImg, limit);  
})

// mobile switch to previous slide
prevBtn.addEventListener("click", () => {
    let currentImg = document.querySelector(".current_img");
    let prevProduct = currentImg.previousElementSibling;
    let limit = null

    displaySlide(prevProduct, currentImg, limit);
})

// increase number of items
add.addEventListener("click", () => {
    quantity++;
    quantityBox.children[1].innerText = quantity;
    orderQuantity.innerText = quantity;
})

// decrease number of items
subtract.addEventListener("click", () => {
    if (quantity > 0) {
        quantity--;
    }
    quantityBox.children[1].innerText = quantity;
    orderQuantity.innerText = quantity;
})

// add items to cart
addToCart.addEventListener("click", () => { 
    // display quantity on cart if items > 0   
    if (quantity > 0) {
        orderQuantity.classList.remove("hide");
        cartContent.classList.remove("hide");
        emptyCartText.classList.add("hide")
        checkoutBtn.classList.remove("hide");
    } else if (quantity === 0) {
        orderQuantity.classList.add("hide");
        cartContent.classList.add("hide");
        emptyCartText.classList.remove("hide")
        checkoutBtn.classList.add("hide");
    }
    sumTotal.innerHTML = `$125.00 x ${quantity} <strong>$${125.00 * quantity}.00</strong>`
})

// display lightbox and give functionality to elements
productImg.addEventListener("click", () => {
    lightBox.classList.remove("hide");
    for (let slideThumbnail of slideThumbnails) {
        slideThumbnail.addEventListener("click", () => {
            removeThumbnailClass();
            slideThumbnail.classList.toggle("current_slide-thumbnail");
            let slideIndex = Array.prototype.indexOf.call(slideThumbnails, slideThumbnail);
            for (let slide of productSlide) {
                slide.classList.remove("current_slide");
                if (slide.classList.length < 2) {
                    slide.classList.add("hide");
                }
            }
            productSlide[`${slideIndex}`].classList.toggle("hide")
            productSlide[`${slideIndex}`].classList.toggle("current_slide")
        })
    }
})

// lightbox switch to next slide
nextSlide.addEventListener("click", () => {
    let currentSlide = document.querySelector(".product_slide.current_slide");
    let nextProduct = currentSlide.nextElementSibling;
    let limit = currentSlide.parentElement.children[5];

    moveTo(nextProduct, currentSlide, limit);
})

// lightbox switch to previous slide
prevSlide.addEventListener("click", () => {
    let currentSlide = document.querySelector(".product_slide.current_slide");    
    let prevProduct = currentSlide.previousElementSibling;
    let limit = document.querySelector(".light-box-close_btn");

    moveTo(prevProduct, currentSlide, limit);
})

// close light box
lightBoxCloseBtn.addEventListener("click", () => {
    lightBox.classList.add("hide");
})





