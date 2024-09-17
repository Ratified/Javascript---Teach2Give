import productsJSON from './object2json.js';

window.onload = function () {
    const paragraphs = document.querySelector('#paragraphs');

    const products = JSON.parse(productsJSON);
    products.forEach(product => {
        const productElement = document.createElement('p');
        productElement.textContent = `${product.name}: $${product.price}`;
        paragraphs.appendChild(productElement);
    });

    console.log(products);
};