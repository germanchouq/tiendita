document.getElementById('payment-button').addEventListener('click', () => {
    // Obtener la cantidad seleccionada por el usuario
    const quantity = document.getElementById('quantity').value;
    
    // Mostrar un mensaje de confirmación temporal
    alert(`Estás comprando ${quantity} producto(s). Redirigiendo a la página de pago...`);

    // Aquí deberías hacer una solicitud a tu servidor para obtener el enlace de pago de Bold
    // Por ejemplo:
    /*
    fetch('/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ quantity: quantity })
    })
    .then(response => response.json())
    .then(data => {
        window.location.href = data.paymentUrl;  // Redirige a la URL de pago
    })
    .catch(error => console.error('Error:', error));
    */
});
