// SELECT
const cartBtn = document.querySelector(".cart-btn");
const cartOverlay = document.querySelector(".cart-overlay");
const cartDOM = document.querySelector(".cart");
const closeCart = document.querySelector(".close-cart");

cartBtn.addEventListener("click", () => {
    cartOverlay.classList.add("transparentBg");
    cartDOM.classList.add("showCart");
});

closeCart.addEventListener('click', () => {
    cartOverlay.classList.remove("transparentBg");
    cartDOM.classList.remove("showCart");
})