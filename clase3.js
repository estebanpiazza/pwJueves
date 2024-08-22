//Funciones

//Expresadas
// Declaro una expresada
console.log(nombreDeLaFuncion(2, 3))
function nombreDeLaFuncion(a, b) {
    return a + b
}
//Invoco una expresada
console.log(nombreDeLaFuncion(1, 2))
// let y var
let nombre = "Esteban"
function saludar() {
    var edad = 31
    let nombre = "Esteban2"
    return "Hola " + nombre
}

console.log(saludar())

/********************* */
//Funcion declarada
//Declarando una declarada
//console.log(despedir("Abril"))
let despedir = function (nombre) {
    return "Chau " + nombre
}

//Invocando una declarada
console.log(despedir("Abril"))


//Funcion flecha

let funcionFlecha = numero => numero * 2;
let funcionFlechaAvanzada = (a, b) => {
    let c = a + b
    return c
}

console.log(funcionFlecha(2))

/**********************/
/*
function calcular(nombre, callback){

}

calcular(1,saludar())
*/
//funciones anonimas


/************/
function ingresarAlBoliche (edadMinima){
    if (edadMinima >= 18){
        return "Puede pasar"
    }
    return "No puede pasar"
}
console.log(ingresarAlBoliche(19))
console.log(ingresarAlBoliche(17))
console.log(ingresarAlBoliche("Esteban"))

/********************* */
function puedeCruzar(colorSemaforo){
    if (colorSemaforo === "rojo"){
        return "no puede cruzar"
    }else{
        return "puede cruzar"
    }
}

/************************ */
function IMC (peso,altura){
    let resultado = peso / altura**2
    if( resultado < 18.5){
        return "Debado del peso"
    } else if (resultado < 25){
        return "Normal"
    }else if (resultado < 30){
        return "Sobrepeso"
    }else{
        return "Obesidad"
    }
}

console.log(IMC(94,1.78))
console.log(IMC(78,1.80))
console.log(IMC(73,1.70))

// if ternario
function saldoSuficiente (saldo){
    let resultado = saldo> 650 ? "Buen viaje":"Saldo insuficiente"
    return resultado
}

console.log(saldoSuficiente(700))
console.log(saldoSuficiente(300))