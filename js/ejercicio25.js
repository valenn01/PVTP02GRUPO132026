import { cambiarFondoAleatorio } from './funciones25.js';

const boton = document.getElementById('botonCambiar');

boton.addEventListener('click', () => {
    cambiarFondoAleatorio();
});