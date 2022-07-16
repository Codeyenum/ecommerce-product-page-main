let cartBtn = document.querySelector(".cart_icon");
let cartCard = document.querySelector(".cart_card");
let cartItems = cartBtn.children[0];
let sumTotal = document.querySelector(".sum-total");

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

let nextBtn = document.querySelector(".next_btn");
let prevBtn = document.querySelector(".prev_btn");

nextBtn.addEventListener("click", () => {  
    let currentProduct = document.querySelector(".current_slide");      
    let nextProduct = currentProduct.nextElementSibling;
    let firstProduct = currentProduct.parentElement.children[0];
    
    if (nextProduct != currentProduct.parentElement.children[4] ) {        
        currentProduct.classList.add("hide"); 
        currentProduct.classList.add("hide-left");       
        currentProduct.classList.remove("current_slide");    
        nextProduct.classList.remove("hide");
        nextProduct.classList.remove("hide-left");  
        nextProduct.classList.add("current_slide");
    }
})

prevBtn.addEventListener("click", () => {  
    let currentProduct = document.querySelector(".current_slide");      
    let prevProduct = currentProduct.previousElementSibling;    
    
    if (prevProduct !== null) {
        currentProduct.classList.add("hide");  
        currentProduct.classList.add("hide-left");    
        currentProduct.classList.remove("current_slide");    
        prevProduct.classList.remove("hide");
        prevProduct.classList.remove("hide-left");  
        prevProduct.classList.add("current_slide");
    }
})


let add = document.querySelector(".plus");
let subtract = document.querySelector(".minus");
let quantityBox = document.querySelector(".quantity_container");
let quantity = 0;

add.addEventListener("click", () => {
    quantity ++;    
    quantityBox.children[1].innerText = quantity;
    cartItems.innerText = quantity;    
})
subtract.addEventListener("click", () => {
    if (quantity > 0) {
        quantity --;
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

// deleteBtn.addEventListener("click", () => {
//     quantityBox.children[1].innerText = 0;
//     cartContent.classList.toggle("hide");        
//     emptyCartText.classList.toggle("hide")    
//     checkoutBtn.classList.toggle("hide");
//     quantity = 0;
//     cartItems.classList.toggle("hide");   
// })

cartCard.addEventListener("mouseleave", () => {
    cartCard.classList.toggle("hide");
})




