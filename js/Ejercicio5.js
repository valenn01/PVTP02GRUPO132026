const convertirTiempo = () => {
    let horas = 2;
    let minutos = 45;
    const segundosTotales = (horas * 3600) + (minutos * 60);
    console.log(`Horas: ${horas}`);
    console.log(`Minutos: ${minutos}`);
    console.log(`Resultado de la conversión: ${segundosTotales} segundos`);
};

convertirTiempo();