const cartAmount = document.querySelector('.cart__count');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const updateCartAmount = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartAmount.textContent = cartItems.reduce((acc, item) => acc + item.quantity, 0);
};

updateCartAmount();

const fetchData = async () => {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();

        let output = '';
        const container = document.querySelector('.container');

        data.forEach((item) => {
            const { id, title, date, company, price, imageUrl } = item;
            output += `
                <div class="container__card">
                    <img src="${imageUrl}" alt="${company}">

                    <div class="container__card__content">
                        <h2 class="container__card__content__title">${title}</h2>
                        <p class="container__card__content__date">${date}</p>
                        <p class="container__card__content__description">${company}</p>
                        <p class="container__card__content__price">${price} KES</p>
                        <button class="container__card__content__button" 
                                data-id="${id}" 
                                data-title="${title}" 
                                data-price="${price}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            `;
        });

        container.innerHTML = output;

        const addToCartBtns = document.querySelectorAll('.container__card__content__button');
        addToCartBtns.forEach((addToCartBtn) => {
            addToCartBtn.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                const title = e.target.dataset.title;
                const price = parseFloat(e.target.dataset.price);

                const item = cart.find((item) => item.id === id);

                if (item) {
                    item.quantity++;
                } else {
                    cart.push({ id, title, price, quantity: 1 });
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartAmount();
            });
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const cartIcon = document.querySelector('.cart');

const cartItemsContainer = document.createElement('div');
cartItemsContainer.classList.add('cart__items');
cartItemsContainer.style.position = 'absolute';
cartItemsContainer.style.top = '50px';
cartItemsContainer.style.right = '0';
cartItemsContainer.style.display = 'none';
cartIcon.appendChild(cartItemsContainer);

cartIcon.addEventListener('click', () => {
    cartItemsContainer.style.display = cartItemsContainer.style.display === 'block' ? 'none' : 'block';
    renderCartItems();
});


const renderCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="cart__empty">Cart is empty</p>';
        return;
    }

    let totalAmount = 0;

    // Render each cart item in the dropdown
    cartItems.forEach((item) => {
        totalAmount += item.price * item.quantity;
        cartItemsContainer.innerHTML += `
            <div class="cart__item">
                <p>${item.title} (x${item.quantity}) - ${item.price.toFixed(2)} KES each</p>
            </div>
        `;
    });

    // Display the total amount to be paid
    cartItemsContainer.innerHTML += `
        <div class="cart__total">
            <strong>Total: ${totalAmount.toFixed(2)} KES</strong>
        </div>
    `;
};

fetchData();