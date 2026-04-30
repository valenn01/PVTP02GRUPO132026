const gestionarNotas = () => {
    const notas = [4, 7, 8, 2, 10, 5, 6, 9, 3, 8];
    let sumaNotas = 0;
    let aprobadosContador = 0;
    console.log(`--- Reporte de Notas ---`);
    notas.forEach((nota, index) => {
        console.log(`Nota ${index + 1}: ${nota}`);
        sumaNotas += nota;
        if (nota >= 6) {
            console.log(`Estado: Aprobado`);
            aprobadosContador++;
        } else {
            console.log(`Estado: Desaprobado`);
        }
    });

    const promedioGeneral = sumaNotas / notas.length;
    console.log(`--- Resumen Final ---`);
    console.log(`Promedio general: ${promedioGeneral}`);
    console.log(`Cantidad de notas aprobadas: ${aprobadosContador}`);
};

gestionarNotas();