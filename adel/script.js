
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Membuka dan menutup menu pada HP
menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("aktif");
});

// Menutup menu setelah salah satu menu diklik
navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("aktif");
    });
});

// Menampilkan tahun secara otomatis
document.getElementById("tahun").textContent =
    new Date().getFullYear();
