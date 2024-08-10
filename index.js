document.addEventListener("DOMContentLoaded", () => {
  const users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },

    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },

    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },

    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kony.org",
    },
  ];

  const userContainer = document.getElementById("user-container");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderUsers() {
    userContainer.innerHTML = "";

    users.forEach((user) => {
      const userCard = document.createElement("div");

      userCard.className = "user-card";

      userCard.innerHTML = `

                <h2>${user.name}</h2>

                <p>${user.email}</p>

                <button onclick="addToCart(${user.id})">Add to Cart</button>

            `;

      userContainer.appendChild(userCard);
    });
  }

  window.addToCart = function (userId) {
    const user = users.find((user) => user.id === userId);

    if (!cart.some((item) => item.id === userId)) {
      cart.push(user);

      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${user.name} added to cart.`);
    } else {
      alert(`${user.name} is already in the cart.`);
    }
  };

  renderUsers();
});
