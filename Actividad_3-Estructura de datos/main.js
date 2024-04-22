let tareas = document.getElementById("tarea").value;


function adicionarElemento(){
    console.log(tareas);
}
document.getElementById("guardar").addEventListener("click",adicionarElemento)