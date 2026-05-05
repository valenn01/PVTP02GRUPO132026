const radiosLenguajes = document.querySelectorAll('input[name="lenguaje"]');
const textoResultado = document.getElementById('resultado-texto');
const actualizarResultado = (evento) => {
    const valorSeleccionado = evento.target.value;
    textoResultado.textContent = valorSeleccionado;
    console.log(`Elegiste: ${valorSeleccionado}`);
};

radiosLenguajes.forEach(radio => {
    radio.addEventListener('change', actualizarResultado);
});