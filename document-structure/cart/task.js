let products = Array.from(document.querySelectorAll('.product'));

for (let product of products) {
    let cart = document.querySelector('.cart__products');
    let quantity = product.querySelector('.product__quantity-value');
    let image = product.querySelector('.product__image');

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
        item.insertAdjacentHTML('beforeEnd', '<div class="cart__product-count"></div>');
        item.querySelector('.cart__product-count').textContent = quantity.textContent.trim();
        return item;
    }

    function addProduct() {
        let item = createProduct();
        let cartProducts = Array.from(cart.querySelectorAll('.cart__product'));
        if (!cart.querySelector('.cart__product')) {
            cart.insertAdjacentElement('beforeEnd', item);
            console.log('add new')
        }

        for (let i = 0; i < cartProducts.length; i++) {
            if (cartProducts[i].dataset.id === item.dataset.id) {
                console.log('match')
                let cartQuantityDiv = cartProducts[i].querySelector('.cart__product-count');
                let itemQuantityDiv = item.querySelector('.cart__product-count');
                let cartQuantity = +cartQuantityDiv.textContent;
                let itemQuantity = +itemQuantityDiv.textContent;
                cartQuantity += itemQuantity;

                почему не получилось так? с помощью Number() тоже не подучилось
                cartQuantity.textContent += itemQuantity.textContent;
            } else { 
                console.log('add another')
                cart.insertAdjacentElement('beforeEnd', item);
            }
        }
    }

    product.onclick = function(event) {
        let target = event.target;
        if (target.classList.contains('product__quantity-control_inc')) {
            increaseValue();
        } else if (target.classList.contains('product__quantity-control_dec')) {
            decreaseValue();
        } else if (target.classList.contains('product__add')) {
            addProduct();
        }
    }
}
