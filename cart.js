let cart = [];

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-id');
        const productName = button.getAttribute('data-name');
        const productPrice = parseInt(button.getAttribute('data-price'));

        const product = { id: productId, name: productName, price: productPrice };

        // Add product to cart
        cart.push(product);
        alert(`${productName} has been added to the cart.`);
        updateCartDisplay();
    });
});

// Update Cart Display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear the cart display
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const row = `<tr>
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td>1</td>
            <td>₹${item.price}</td>
        </tr>`;
        cartItemsContainer.innerHTML += row;
    });

    document.getElementById('cart-total').textContent = total;
}
