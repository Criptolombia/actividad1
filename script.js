// Espera a que todo el HTML esté cargado antes de ejecutar el código.
document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener referencias a los elementos del HTML usando su ID.
    const form = document.getElementById('loginForm');
    const messageElement = document.getElementById('message');

    // 2. Añadir un "escuchador" de eventos al formulario para cuando se envíe.
    form.addEventListener('submit', function(event) {
        // Prevenir que el formulario se envíe de la manera tradicional (evita la recarga de la página).
        event.preventDefault();

        // 3. Obtener los valores de los campos de entrada.
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // 4. Lógica de validación básica.
        if (username === 'admin' && password === '1234') {
            messageElement.textContent = '¡Inicio de sesión exitoso! Redirigiendo...';
            messageElement.style.color = 'green';
            // Aquí iría el código para redirigir al usuario.
        } else {
            messageElement.textContent = 'Usuario o contraseña incorrectos.';
            messageElement.style.color = 'red';
        }
    });
});
