//Javascript:  estructura for, metodos de arrays  / JSON y API / ejercicios con prompt sync


/*
for x in range(10):
    print x
*/

// ( variable de iteración, la condición,variación de la variable )
for (let i = 0; i < 10;i++){
    console.log(i)
}

for (let i = 10; i > 0; i--){
    console.log(i)
}

/* for (let i = 0; i != -1;i++){
    console.log(i)
} */
/******************************/
let estudiantes = ["Juani", "Catamarca", "Portugal","amiga de anto 1", "amiga de anto 2", "amiga de anto 4 (marti)","flor del arbol  de cerezo en japones"]
// len(estudiantes) - random() - abs() - chr() - ord()
// metodo(objeto/dato)
console.log(estudiantes.length)
for (let i = 0; i < estudiantes.length;i++   ){
    console.log(estudiantes[i])
}

let numero = [1,2,3,4,5,6,7,8,9]

function cantidadPares(array){
    let contadorPares = 0
    for (let i = 0; i < array.length; i++){
        if ( array[i] % 2 === 0 ){
            contadorPares++ // contadorPares = contadorPares+1
        }
    }
    return contadorPares
}

console.log(cantidadPares(numero))

/******************************** */

function calcularPromedio(array){
    let suma = 0
    for(let i = 0; i < array.length;i++){
        suma = suma + array[i]
    }
    let promedio = suma / array.length
    return promedio
}

console.log(calcularPromedio(numero))
const array2 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

/***************************/
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]

/*********************/
function encontrarValor (array,valorABuscar){
    for(let i = 0; i < array.length;i++){
        if (array[i]===valorABuscar){
            return i
        }
    }
    return -1
}

console.log(encontrarValor(estudiantes,"Catamarca"))
console.log(estudiantes.indexOf("amiga de anto 1"))
console.log(estudiantes.indexOf("asdasdasd"))

/***************************** */

let estudiantes2024 = [
    {nombre:"Dana",
        anio: 4
    },
    {nombre:"Tomas",
        anio: 2
    }
]

let estudiantes2025 = estudiantes2024.map(x => x.anio = x.anio+1)
console.log(estudiantes2025)


/************************* */
let estudiantes20242 = [
    {
        nombre: "Dana",
        anio: 4
    },
    {
        nombre: "Tomas",
        anio: 2
    }
]

let estudiantes20252 = estudiantes2024.map(x => {
    return {
        ...x, // Copia todos los atributos del objeto original
        anio: x.anio + 1 // Actualiza el atributo `anio`
    };
});

console.log(estudiantes20252);

/******************************************* */



//*******************//
//API y JSON
let objetoLiteral = {nombre:"Steve",edad:31,cumplirAnios:function(){ this.edad = this.edad +1}}
let objetoConvertido = JSON.stringify(objetoLiteral)
let objetoConvertidoDeVuelta = JSON.parse(objetoConvertido)
console.log(objetoConvertidoDeVuelta.edad)
console.log(objetoLiteral)
console.log(objetoConvertido)
console.log(objetoConvertido)
console.log(objetoConvertidoDeVuelta)




