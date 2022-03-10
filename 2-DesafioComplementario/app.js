
let tareas = [];


const tarea = {
    name: "name",
    tipo: "tipo"
}


function requestTask() {
 nombreTarea = prompt("Que tarea quieres añadir")
 tipoTarea = prompt("Que tipo de tarea se trata")
      tarea.name = nombreTarea;
      tarea.tipo = tipoTarea;
      tareas.push(tarea)
}

requestTask();
requestTask();
requestTask();

console.log(tareas[0,1,2]);


/*INTENTAR HACER UN REGISTRO DE TAREAS*/
