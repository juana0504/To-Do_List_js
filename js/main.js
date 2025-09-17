//Cree las constantes globales para los elementos principales 

const input =document.getElementById("to-do-input");
const addbtn = document.getElementById("add-btn");
const ToDoList = document.getElementById("cont-to-do-list");
const CompletedList = document.getElementById("cont-completed");

//Creamos la función que nos permite crear una nueva tarea 
//Toda etiqueta que vamos a crear es apartir de la maqueta html pre-existente

function createToDoItem(textoItem){
    //Creamos el nodo o elemento padre
    const item =document.createElement("div");
    item.classList.add("item-to-do");

    //creamos el nodo o elemento hijo y le agregamo el nodo checkbox
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";

    //Creamos el siguiente nodo hijo parrafo, a este parrafo le asigno el valor del argumento de la función es decir lo que escribe el usuario en el campo
    const p =document.createElement("p");
    p.textContent=textoItem;

    //Creamos el ultimo nodo hijo, el boton de eliminar
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="x";

    //Ensablamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea 
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    //Utilizamos el return para retornar o dar respuesta el elemento creado, ya que lo usaremos en otra funcion mas adelante
    return item;
} 

//Detectamos el evento click sobre el boton agregar o mas con un evento de escucha o listen
//para apartir de este elemento se agregue la tarea dentro del contenedo cont-to-do-list

addbtn.addEventListener('click', ()=>{
    const textoItem=input.value.trim();
    if (textoItem=="") {
        alert("No se puede crear una tarea vacia")
    } else {
        const newItem = createToDoItem(textoItem);
        ToDoList.appendChild(newItem);
        input.value="";
    }
});