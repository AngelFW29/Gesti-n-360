document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    alert("¡Gracias por contactarnos! Serás redirigido al inicio."); // Mensaje opcional

    window.location.href = "index.html"; // Redirección a inicio
});