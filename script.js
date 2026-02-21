'use strict';

// Sample products data
const products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 39.99 },
    { id: 3, name: 'Product 3', price: 49.99 }
];

// DOM element selections
const productContainer = document.getElementById('product-container');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelectorAll('nav a');

// Function to render products
function renderProducts() {
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `<h2>${product.name}</h2><p>$${product.price}</p><button onclick="addToCart(${product.id})">Add to Cart</button>`;
        productContainer.appendChild(productElement);
    });
}

// Mobile menu toggle functionality
menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
});

// Navigation setup with active link highlighting
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

// Smooth scroll functionality
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add to cart functionality
const cart = [];
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name} has been added to your cart!`);
    }
}

// Contact form submission handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle form submission here
    alert('Contact form submitted!');
});

// Initial call to render products
renderProducts();
