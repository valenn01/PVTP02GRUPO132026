export function cambiarTodo(elemento) {
    elemento.textContent = "¡Texto actualizado y con nuevo estilo!";
    elemento.style.color = "red"; 
    elemento.style.fontSize = "24px";
    elemento.style.transition = "all 0.5s"; 
}