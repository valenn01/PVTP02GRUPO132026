export function analizarTexto(textoIngresado) {
    
    const superaLimite = textoIngresado.length > 20;
    
    const textoFinal = textoIngresado === "" ? "Tu texto aparecerá aquí..." : textoIngresado;

    return {
        texto: textoFinal,
        limiteExcedido: superaLimite
    };
}