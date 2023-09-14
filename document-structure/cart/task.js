const cart = document.querySelector('.cart__products');
const product = Array.from(document.querySelectorAll('.product'));
const img = Array.from(document.querySelectorAll('img'));
const dec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const inc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const quantity = Array.from(document.querySelectorAll('.product__quantity-value'));
const addProduct = Array.from(document.querySelectorAll('.product__quantity-value'));

dec.forEach((item, index) => {
    item.addEventListener('click', () => {
        quantity[index].textContent--;
    })
})
inc.forEach((item, index) => {
    item.addEventListener('click', () => {
        quantity[index].textContent++;
    })
})
addProduct.forEach((item, index) => {
    item.addEventListener('click', () => {
        cart.insertAdjacentHTML('afterBegin', '<div class="cart__product" data-id=""><img class="cart__product-image" src="image.png"><div class="cart__product-count">20</div></div>');
        document.querySelector('.cart__product-count').textContent = quantity[index].textContent;
        document.querySelector('.cart__product').setAttribute('data-id', product[index].getAttribute('data-id'));
        document.querySelector('.cart__product-image').setAttribute('src', img[index].getAttribute('src'));
        const cartProduct = Array.from(document.querySelectorAll('.cart__product'));

    })
})