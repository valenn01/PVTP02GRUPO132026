
import { cambiarTodo } from './funciones19.js';

const elBoton = document.getElementById('botonCambiar');
const elParrafo = document.getElementById('Text');


elBoton.addEventListener('click', () => {
    cambiarTodo(elParrafo);
});