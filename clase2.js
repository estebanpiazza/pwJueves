let variable;
//Number:   Numero entero (int) y Numero con coma (float)
let numero = 1;
//String : Cadena de caracteres (alfanumericos)
let nombre = "Steve" // lleva comillas
// "", '', ``
// Boolean: Verdadero o Falso
let booleano = true;
let booleano2 = false;
/***************Excepciones y rarezas de los tipos de datos********************/
console.log(nombre+numero) //Steve1
console.log(numero+numero)//2
console.log(booleano+numero)//2
console.log(booleano2+numero)//1
console.log("11"+1)//111
console.log("11"-1)//10
console.log("hola"+"chau")
console.log(0.7+0.1) //0.799999999999
/*
*comentarios multi linea
*/
/***********Constantes********/
const PI = 3.1415
//PI = 5; <<< esto daria error
/***********Arrays (listas)********/
const ARRAY1 = [1,2,3,4]
console.log(ARRAY1[0])
let ARRAY2 = ["Esteban",31,true];
ARRAY1[0] = 5
console.log(ARRAY1)
ARRAY1.push(6)
console.log(ARRAY1)
/***************Objetos // Objeto Literal**********/
let estudianteGenerico1 = {
    nombre:"Juani",
    apellido:"Magariños",
    edad: 29,
    deudor:false,
    cumplirAnios: function(){ // esto es un def pero propio del estudianteGenerico1
        this.edad = this.edad + 1
    }
}
console.log(estudianteGenerico1.edad)
estudianteGenerico1.cumplirAnios()
console.log(estudianteGenerico1.edad)


/*************Array de Objetos Literales************** */
const arrayDeObjetos = [{nombre:"dana",edad:22},{nombre:"martina",edad:21},{nombre:"juanita",edad:20}]
console.log(arrayDeObjetos[2].edad)
console.table(arrayDeObjetos)

/*****************Operadores mateamticos******************** */
console.log(1+1)//suma y concatena
console.log(1-1)//restar
console.log(1*1)//multiplicar
console.log(10/2)//dividir : 5 (cociente)
console.log(10%2)//dividir y mostrar resto : 0 (resto)
console.log(3**2)//potencia
edad = 1
console.log(edad+=2) //acumula el valor despues del igual
console.log(edad = edad++) // suma 1
console.log(edad = edad--) //resta1
/*******Operadores aritmeticos******/
console.log(1>2) //mayor
console.log(1<2) //menor
console.log(1>=2)  //mayor o igual
console.log(1<=2) //menor o igual 
console.log(1==1) // igualdad
console.log("1"==1)//igualdad debil
console.log("1"===1) //igualdad estricta , compara el valor y el tipo de dato
console.log(1!=1)//desigualdad
console.log("1"!==1)//desigualdad estricta

/************Operadores logicos******* */
console.log("hola" && "chau") // && es and 
console.log("hola" || "chau") // || es or
/*****Truthy y Falsy*******/
// Falsy: false, 0, "", null, undefined, y NaN
// Thruty: el resto son verdaderos
/***********Parseos(castear)************ */
let numeroString = "111.9"
numeroString = parseInt(numeroString)
let numeroString2 = "222.2"
numeroString2 = parseFloat(numeroString2)
console.log(numeroString)
console.log(numeroString2)
let numero3 = 123
numero3 = numero3.toString()
console.log(numero3)