export function cambiarFondoAleatorio() {
    // Generamos un color aleatorio en formato hexadecimal
    const colorRandom = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Cambiamos el fondo de TODO el body
    document.body.style.backgroundColor = colorRandom;
    
    // Mostramos el mensaje en consola que pide el profe
    console.log("El color de fondo cambió a: " + colorRandom);
}