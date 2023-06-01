function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
    } else {
        alert('Correo electrónico enviado correctamente.');
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
    return regex.test(email);
}

const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
        document.querySelector(".nav-links")
            .classList.toggle("nav-links-responsive");
    });

 
const miBoton = document.getElementById('miBoton');

function handleClick(){
    alert('¡Hola! Has hecho clic en el botón.');
}
//Agrega un oyente de eventos para escuchar el clic del botón
miBoton.addEventListener('click', handleClick);

function showAlert() {alert('Hello, this is an alert from JavaScript!');}
