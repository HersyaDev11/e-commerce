// Menangani tombol beli sekarang
document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll(".btn");
  const cartCounter = document.createElement("span");
  cartCounter.classList.add("cart-counter");
  cartCounter.textContent = 0;
  document.querySelector("nav ul").appendChild(cartCounter); // Menampilkan jumlah di keranjang

  // Fungsi untuk memperbarui keranjang belanja
  function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartCounter.textContent = cartItems.length;
  }

  // Fungsi untuk menambah produk ke keranjang
  function addToCart(productName, productPrice) {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push({ name: productName, price: productPrice });
    localStorage.setItem("cart", JSON.stringify(cartItems));
    updateCartCount();
  }

  // Event handler untuk tombol beli
  buyButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      const productCard = e.target.closest(".product-card");
      const productName = productCard.querySelector("h3").textContent;
      const productPrice = productCard.querySelector(".price").textContent;

      addToCart(productName, productPrice);
      alert(`${productName} berhasil ditambahkan ke keranjang!`);
    });
  });

  // Memperbarui jumlah keranjang belanja saat halaman dimuat
  updateCartCount();
});
// Menangani tombol beli sekarang
document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll(".btn");
  const cartCounter = document.createElement("span");
  const cartModal = document.getElementById("cart-modal");
  const closeModalBtn = document.querySelector(".close-btn");
  const openCartBtn = document.getElementById("open-cart");
  const cartItemsList = document.getElementById("cart-items");
  const checkoutBtn = document.getElementById("checkout");

  cartCounter.classList.add("cart-counter");
  cartCounter.textContent = 0;
  document.querySelector("nav ul").appendChild(cartCounter); // Menampilkan jumlah di keranjang
});
// Fungsi untuk memperbarui keranjang belanja
function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartCounter.textContent = cartItems.length;
}

// Fungsi untuk menambah produk ke keranjang
function addToCart(productName, productPrice) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.push({ name: productName, price: productPrice });
  localStorage.setItem("cart", JSON.stringify(cartItems));
  updateCartCount();
}

// Event handler untuk tombol beli
buyButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const productCard = e.target.closest(".product-card");
    const productName = productCard.querySelector("h3").textContent;
    const productPrice = productCard.querySelector(".price").textContent;

    addToCart(productName, productPrice);
    alert(`${productName} berhasil ditambahkan ke keranjang!`);
  });
});

// Fungsi untuk menampilkan isi keranjang
function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItemsList.innerHTML = ""; // Kosongkan list sebelum menambahkan item baru

  if (cartItems.length === 0) {
    cartItemsList.innerHTML = "<p>Keranjang kosong</p>";
  } else {
    cartItems.forEach(function (item, index) {
      const li = document.createElement("li");
      li.innerHTML = `${item.name} - ${item.price} <button class="remove-item" data-index="${index}">Hapus</button>`;
      cartItemsList.appendChild(li);
    });

    // Tambahkan event listener untuk menghapus item dari keranjang
    const removeButtons = document.querySelectorAll(".remove-item");
    removeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const itemIndex = this.getAttribute("data-index");
        removeFromCart(itemIndex);
      });
    });
  }
}

// Fungsi untuk menghapus item dari keranjang
function removeFromCart(index) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.splice(index, 1); // Hapus item berdasarkan index
  localStorage.setItem("cart", JSON.stringify(cartItems)); // Simpan perubahan
  displayCartItems(); // Update tampilan
  updateCartCount(); // Update jumlah keranjang
}

// Event untuk membuka modal keranjang
openCartBtn.addEventListener("click", function () {
  displayCartItems(); // Tampilkan isi keranjang
  cartModal.style.display = "flex"; // Tampilkan modal
});

// Event untuk menutup modal keranjang
closeModalBtn.addEventListener("click", function () {
  cartModal.style.display = "none";
});

// Event untuk checkout (contoh)
checkoutBtn.addEventListener("click", function () {});
