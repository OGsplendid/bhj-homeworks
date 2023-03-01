let products = Array.from(document.querySelectorAll('.product'));

for (let product of products) {
    let cartDiv = document.querySelector('.cart');
    let cart = document.querySelector('.cart__products');
    let quantity = product.querySelector('.product__quantity-value');
    let image = product.querySelector('.product__image');

    cartDiv.onclick = function(event) {
        let target = event.target;
        console.log(target);
        if (target.classList.contains('close__button')) {
            target.closest('div').remove();
        }
        if (!cartDiv.querySelector('.cart__product')) {
            cartDiv.style.display = 'none';
        }
    }

    function increaseValue() {
        quantity.textContent++;
    }

    function decreaseValue() {
        quantity.textContent--;
        if (quantity.textContent < 1) {
            quantity.textContent = 1;
        }
    }

    function createProduct() {
        let item = product.cloneNode(false);
        item.className = 'cart__product';
        let itemImage = image.cloneNode(false);
        itemImage.className = 'cart__product-image';
        item.insertAdjacentElement('afterBegin', itemImage);
        item.insertAdjacentHTML('beforeEnd', '<div class="cart__product-count"></div><a href="#" class="close__button">&times;</a>');
        item.querySelector('.cart__product-count').textContent = quantity.textContent.trim();
        return item;
    }

    function addProduct() {

        let item = createProduct();
        let itemQuantity = Number(item.querySelector('.cart__product-count').textContent);
        
        let cartProducts = Array.from(cart.querySelectorAll('.cart__product'));
        let itemInCart = cartProducts.find(el => el.dataset.id === item.dataset.id);

        if (itemInCart) {

            // почему не удался такой синтаксис?
            // let itemInCartQuantity = itemInCart.querySelector('.cart__product-count').textContent;
            // ведь здесь аналогия с 
            // let itemQuantity = Number(item.querySelector('.cart__product-count').textContent);

            let itemInCartQuantity = itemInCart.querySelector('.cart__product-count');
            itemInCartQuantity.textContent = Number(itemInCartQuantity.textContent) + itemQuantity;
        } else {
            cart.insertAdjacentElement('beforeEnd', item);
        }
    }

    product.onclick = function(event) {
        let target = event.target;
        if (target.classList.contains('product__quantity-control_inc')) {
            increaseValue();
        } else if (target.classList.contains('product__quantity-control_dec')) {
            decreaseValue();
        } else if (target.classList.contains('product__add')) {
            cartDiv.style.display = 'block';
            addProduct();
        }
    }
}
