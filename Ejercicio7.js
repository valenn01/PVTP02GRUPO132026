const analizarNombres = () => {
    const nombres = ["Pepe", "Gonzalo", "Kvaratskhelia", "Lucho", "Messi", "Julian"];
    let nombreMasLargo = nombres[0];
    console.log(`Nombres en el array: ${nombres.join(", ")}`);
    nombres.forEach(nombre => {
        if (nombre.length > nombreMasLargo.length) {
            nombreMasLargo = nombre;
        }
    });

    console.log(`El nombre más largo es: ${nombreMasLargo}`);
    console.log(`Su tamaño es de: ${nombreMasLargo.length} caracteres`);
};

analizarNombres();