import { procesarTexto } from './funciones22.js';

const inputTexto = document.getElementById('entradaTexto');
const parrafoSalida = document.getElementById('salidaTexto');

inputTexto.addEventListener('input', function() {
    
    const textoActualizado = procesarTexto(inputTexto.value);
    
    parrafoSalida.textContent = textoActualizado;
    
});