// Produktliste
const products = [
  { id: 1, name: "Luksus hundeseng", category: "Senge", price: "499 kr", image: "https://placehold.co/300x200?text=Hundeseng" },
  { id: 2, name: "Robust lædersele", category: "Seler & Liner", price: "299 kr", image: "https://placehold.co/300x200?text=Lædersele" },
  { id: 3, name: "Keramisk vandskål", category: "Skåle", price: "149 kr", image: "https://placehold.co/300x200?text=Vandskål" },
  { id: 4, name: "Godbidstaske i stof", category: "Godbidder", price: "99 kr", image: "https://placehold.co/300x200?text=Godbidstaske" },
  { id: 5, name: "Snusemåtte", category: "Legetøj", price: "179 kr", image: "https://placehold.co/300x200?text=Snusemåtte" },
  { id: 6, name: "Tyggestang oksehud", category: "Godbidder", price: "39 kr", image: "https://placehold.co/300x200?text=Tyggestang" },
  { id: 7, name: "Blød hundepude", category: "Senge", price: "349 kr", image: "https://placehold.co/300x200?text=Hundepude" },
  { id: 8, name: "Kastebold med reb", category: "Legetøj", price: "79 kr", image: "https://placehold.co/300x200?text=Kastebold" }
];

// Render produkter
function renderProducts(filter = "Alle") {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  const filtered = filter === "Alle" ? products : products.filter(p => p.category === filter);

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <button class="buy-btn">Køb nu</button>
    `;
    container.appendChild(card);
  });
}

// Filter knapper
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    renderProducts(btn.dataset.category);
  });
});

// Start med alle produkter
renderProducts();
