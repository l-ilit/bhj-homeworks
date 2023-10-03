const cart = document.querySelector('.cart__products');
const product = Array.from(document.querySelectorAll('.product'));
const img = Array.from(document.querySelectorAll('img'));
const dec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const inc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const quantity = Array.from(document.querySelectorAll('.product__quantity-value'));
const addProduct = Array.from(document.querySelectorAll('.product__add'));

dec.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (quantity[index].textContent > 1) {
        quantity[index].textContent--;
        }
    })
})
inc.forEach((item, index) => {
    item.addEventListener('click', () => {
        quantity[index].textContent++;
    })
})
addProduct.addEventListener('click', (event) => {
    const productAdded = document.querySelectorAll('.cart-product');
    const existingProduct = Array.from(productAdded).find(product => product.getAttribute('data-id') === id)
        if (existingProduct) {
            let existingQuantity = existingProduct.querySelector('.cart__product-count')
            existingQuantity.innerText = Number(existingQuantity.innerText) + Number(quantity.innerText)
        } else {
            const newProduct = `
                <div class="cart__product" data-id="${id}">
                    <img class="cart__product-image" src="${img}">
                    <div class="cart__product-count">${quantity.innerText}</div>
                </div>`
            cart.insertAdjacentHTML('beforeEnd', newProduct)
        }
    })     
