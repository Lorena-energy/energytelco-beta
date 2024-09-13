// Validar el formulario de contacto
document.querySelector('form').addEventListener('submit', function(event) {
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('message').value;
    
    if (nombre === '' || email === '' || mensaje === '') {
        event.preventDefault(); // Evita que el formulario se envíe
        alert('Por favor, completa todos los campos antes de enviar el formulario.');
    } else {
        alert('Formulario enviado correctamente.');
    }
});
/* Estilos para el botón al pasar el ratón */
.btn {
    transition: background-color 0.3s ease, color 0.3s ease;
}

.btn:hover {
    background-color: #555;
    color: #fff;
}
/* Ajustes para pantallas pequeñas */
@media screen and (max-width: 768px) {
    nav ul {
        flex-direction: column;
        text-align: center;
    }

    #inicio {
        padding: 20px;
        font-size: 1.2em;
    }

    #contacto input, #contacto textarea {
        width: 100%;  /* Hacer que los inputs ocupen todo el ancho en móviles */
    }
}
