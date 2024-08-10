document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-container");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  function renderCart() {
    cartContainer.innerHTML = "";
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      cart.forEach((user) => {
        const cartItem = document.createElement("div");
        cartItem.className = "user-card";
        cartItem.innerHTML = `
                    <h2>${user.name}</h2>
                    <p>${user.email}</p>
                    <button class="delete" onclick="removeFromCart(${user.id})">Delete</button>
                `;
        cartContainer.appendChild(cartItem);
      });
    }
  }
  window.removeFromCart = function (userId) {
    const index = cart.findIndex((user) => user.id === userId);
    if (index !== -1) {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  };
  renderCart();
});
