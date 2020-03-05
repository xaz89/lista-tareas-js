'use strict';

(function (){

    // Variables
    var lista = document.getElementById('lista');
    var btnAgregar = document.getElementById('btn-agregar');
    var tareaInput = document.getElementById('tarea-input');

    // Funciones
    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega algo válido no seas wei");
            tareaInput.className="error";
            return false;
        }
        enlace.appendChild(contenido);
        enlace.setAttribute("href", "#");
        nuevaTarea.appendChild(enlace);
        lista.appendChild(nuevaTarea);

        tareaInput.value="";
/* 

        lista.appendChild(nuevaTarea);
        enlace.appendChild(contenido);
        lista.className="principal"; */
    };
    var comprobarInput = function(){
        // alert("comprobarInput")
    };
    var eliminarTarea = function(){
        
        alert("eliminarTarea");
    };

    // Eventos
    // Agregar Tarea
    btnAgregar.addEventListener('click', agregarTarea);
    // Comprobar Tarea
    tareaInput.addEventListener('click', comprobarInput);
    // Borrando elementos de la lista
    for (let i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
    }
}());