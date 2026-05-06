import { analizarTexto } from './funciones23.js';


const inputTexto = document.getElementById('entradaTexto');
const parrafoSalida = document.getElementById('salidaTexto');


inputTexto.addEventListener('input', function() {
    

    const resultado = analizarTexto(inputTexto.value);
    
    
    parrafoSalida.textContent = resultado.texto;
    

    if (resultado.limiteExcedido) {
        parrafoSalida.style.backgroundColor = '#4a0000';
        parrafoSalida.style.color = '#ff6666';           
        parrafoSalida.style.borderLeftColor = '#ff0000'; 
    } else {
        parrafoSalida.style.backgroundColor = '#333';    
        parrafoSalida.style.color = '#e0e0e0';           
        parrafoSalida.style.borderLeftColor = '#bb86fc'; 
    }
    
});