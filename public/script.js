document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'Procesando...';

    try {
        const response = await fetch('https://backed-jp-site.netlify.app/.netlify/functions/server/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, address, phone })
        });

        const result = await response.json();

        if (response.ok) {
            responseMessage.textContent = result.message;
            responseMessage.style.color = 'green';
        } else {
            responseMessage.textContent = result.error || 'Error en el registro.';
            responseMessage.style.color = 'red';
        }
    } catch (error) {
        responseMessage.textContent = 'Error de conexión con el servidor.';
        responseMessage.style.color = 'red';
    }
});
