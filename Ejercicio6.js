const gestionarEdades = () => {
    const edades = [18, 22, 19, 30, 25, 21, 28, 20];
    let sumaEdades = 0;
    console.log(`--- Listado de Edades ---`);
    edades.forEach(edad => {
        console.log(`Edad: ${edad}`);
        sumaEdades += edad;
    });

    const promedio = sumaEdades / edades.length;
    console.log(`El promedio de las edades es: ${promedio}`);
};

gestionarEdades();