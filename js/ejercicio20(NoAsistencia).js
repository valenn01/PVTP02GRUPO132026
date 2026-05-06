function mostrarDatos() {
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let libreta = document.querySelector("#libreta").value;

    alert("Los datos ingresados son:\n" +
          "Nombre: " + nombre + "\n" +
          "Apellido: " + apellido + "\n" +
          "Libreta Universitaria: " + libreta);
}