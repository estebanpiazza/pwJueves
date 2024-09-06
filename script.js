//capturo quien va a llamar a la acción
let botonSaludar = document.querySelector("#saludar")

botonSaludar.addEventListener("click", function(){
// Capturar el valor del elemento en una variable
let nombreUsuario = document.getElementById("nombreUsuario").value
let mostrarResultado = document.querySelector("#resultado")
mostrarResultado.innerText = "Hola "+nombreUsuario

})

let fotos = document.getElementsByClassName("imagenSaluda")
console.log(fotos)
 



