const formulario = document.getElementById("formulario");
const link = document.getElementById("link");
const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const tbody = document.getElementById("tbody");
const helper = document.getElementById("helper");
let usuarios = [];

const limpiarErrores = () => {
    //quitar el estilo del borde rojo al formulario
    formulario.classList.remove("borde-rojo");

    // ocultar el small(helper)
    helper.setAttribute("hidden", true);

}

const generarError = () => {
    // mostrar el texto de error

    helper.removeAttribute("hidden");

    // le va colocar el borde rojo al formulario
    formulario.removeAttribute.classlist.add("borde-rojo")
};

const eliminarUsauario = (posicion) => {
    usuarios = usuarios.filter((usu, i) => {
        if (i !== posicion) {
            return usu;
        }
    });

    redibujarTbody();
}
const redibujarTbody = () => {
    /**
     *  1. Limpiar el tbody (borrar todo el innerHTML del tbody)
     *     tbody.innerHTML = "";
     *  2. Crear una variable string vacía
     *  3. Recorrer el arreglo de usuarios (ejm forEach)
     *  4. En el forEach ir agregando al string vacío la estructura
     *     de la fila por cada usuario (concatenar STRINGS)
     *  5. Luego del forEach ó for, settear el innerHTML del tbody
     *     con el string creado
     *  6. Reto: darle estilos a las tablas
     */
    tbody.innerHTML = "";

    usuarios.forEach((usu, i) => {
        let tr = document.createElement("tr");
        let tdNro = document.createElement("td");
        tdNro.innerText = i + 1;

        let tdNombre = document.createElement("td");
        tdNombre.innerText = usu.nombre;

        let tdApellido = document.createElement("td");
        tdApellido.innerText = usu.apellido;

        let tdAcciones = document.createElement("td");
        let btnEliminar = document.createElement("button");
        btnEliminar.innerText = "Eliminar";
        btnEliminar.onclick = () => {

            console.log("se hizo clic en eliminar");
            eliminarUsauario(i);
        }

        tdAcciones.appendChild(btnEliminar);

        tr.appendChild(tdNro);
        tr.appendChild(tdNombre);
        tr.appendChild(tdApellido);
        tr.appendChild(tdAcciones);
        //agrega al 
        tbody.appendChild(tr);
    });

    //colocar le cursor en el campor del nombre para que el usuario este listo para ingresar el siguiente registro.

    inputNombre.focus();
};

/**
 * form.onsubmit = evento que se desencadena cuando queremos
 * procesar o enviar el formulario
 */

formulario.addEventListener("submit", (evento) => {
    /**
     * ¿Por qué se actualiza la página con el submit?
     * Porque es el comportamiento por defecto de dicho evento
     * ¿Cómo detener el comporatmiento por defecto de un evento?
     * evento.preventDefault();
     */
    evento.preventDefault();
    console.log("Procesando el formulario...");
    if (inputNombre.value.trim() === "" || inputApellido.value.trim() === "") {
        generarError();
    }


    let objUsuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
    };


    ///usuario en el arreglo
    usuarios.push(objUsuario);
    //limpiar campos del formulario
    inputNombre.value = "";
    inputApellido.value = "";
    // limpiar errores
    limpiarErrores();


    console.log(usuarios);
    //RETO: llamar a una función que redibuje el tbody cada vez
    // que nuestro arreglo de usuarios es alterado (cambia de elementos)
    redibujarTbody();
});

link.onclick = (evento) => {
    evento.preventDefault();
    console.log("Dieron clic al hipervinculo");
};