
export function procesarTexto(textoIngresado) {
    if (textoIngresado === "") {
        return "Tu texto aparecerá aquí automáticamente...";
    } else {
        return textoIngresado;
    }
}