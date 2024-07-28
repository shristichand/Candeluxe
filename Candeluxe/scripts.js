// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.querySelector('.cart a');
    let cartCount = 0;

    const addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = `Cart (${cartCount})`;
        });
    });
});
