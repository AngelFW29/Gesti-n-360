document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email && password) {
        // Redirige a index.html si los campos están llenos
        window.location.href = "index.html";
    } else {
        alert("Por favor, completa todos los campos.");
    }
});