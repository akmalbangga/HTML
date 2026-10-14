
const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");


const togglePassword =
    document.getElementById("togglePassword");

togglePassword.addEventListener("click", function() {
    const passwordInput =
        document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Sembunyi";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Lihat";
    }
});


form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (email.value.trim() !== "" &&
        password.value.trim() !== "") {

        message.style.color = "#b75cff";
        message.textContent =
            "Form berhasil diisi!";

    } else {
        message.style.color = "red";
        message.textContent =
            "Email dan password wajib diisi.";
    }
});

document.getElementById("forgot").addEventListener(
    "click", function(event) {
        event.preventDefault();

        message.style.color = "#b75cff";
        message.textContent =
            "Fitur pemulihan password belum tersedia.";
    }
);

document.getElementById("signup").addEventListener(
    "click", function(event) {
        event.preventDefault();

        message.style.color = "#b75cff";
        message.textContent =
            "Halaman pendaftaran belum tersedia.";
    }
);

