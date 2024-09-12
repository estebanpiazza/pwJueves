/*
1. Crea un sistema de gestión de tareas donde se puedan agregar, eliminar y modificar tareas.
2. Las tareas se almacenarán en un array de objetos, donde cada objeto representa una tarea con los siguientes atributos:
   - `id` (número único)
   - `nombre` (string)
   - `completado` (booleano)
3. Verifica si una tarea existe y si está completa por id.
4. El sistema debe tener funciones para agregar tareas, marcar tareas como completadas, y eliminar tareas por id.
5. Desarrollar una función para mostrar todas las tareas, y que se pueda filtrar si están completadas o no.
6. Convierte el array de objetos a JSON utilizando `JSON.stringify`, y luego conviértelo de vuelta a un objeto con `JSON.parse`.
*/
let tareas = []
let serial = 0
function agregarTarea(nombre,array,estado){
    let ultimo = (array.length)
    let tarea = {id:ultimo,nombre:nombre,completado:estado}
    array.push(tarea)
}
agregarTarea("pepito",tareas,false) 
agregarTarea("pepito2",tareas,false)
console.log(tareas)
function eliminarTarea (id, array){
    array.splice(id,1)
}
console.log("*************************")
eliminarTarea(0,tareas)
console.log(tareas)
console.log("*************************")

function modificarTarea (id,array,nombre){
    for (let i = 0;i< array.length;i++){
        if (id == array[i].id){
            array[i].nombre = nombre;
        }
    }
}
console.log(tareas)
console.log("*************************")
modificarTarea(1,tareas,"cambio")
console.log("*************************")

console.log(tareas)

function verificarTarea (id,array){
    for (let i = 0;i< array.length;i++){
        if (id == array[i].id){
            console.log("La tarea existe")
        }
        else{
            console.log("La tarea no existe")
        }
    }
}

verificarTarea(1,tareas)
verificarTarea(525,tareas)

function completarTarea (id,array){
    for (let i = 0;i< array.length;i++){
        if (id == array[i].id){
            array[i].completado = true
        }
    }
}

completarTarea(1,tareas)
console.log(tareas)

function mostrarYFiltrar(array,condicion){
    let completadas = []
    if (condicion == "si"){
        for (let i = 0 ; i < array.length; i++){
            if(array[i].completado == true){
                completadas.push(array[i])
            }
        }
        return completadas
    }else{
        return array
    }
}

console.log(mostrarYFiltrar(tareas,"si"))

let tareasString = JSON.stringify(tareas)
console.log(tareasString)