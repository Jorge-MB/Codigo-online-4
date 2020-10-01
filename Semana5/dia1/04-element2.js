/**
 * element.classlist --- devuelve un arreglo de las clases q un elemento tiene (separados por espacios)
 * 
 * element.classlist.add(clae_a_agrega)
 * agrega una clase a la lista de clases de un elemento
 * 
 * element.classList.remov("clase_a_eliminar")
 * elimina una clase de la lista de clases de un elemento
 * 
 * element.classList.toggle("clase_interruptor")
 * agrega o quita una clase al elemento, funciona al igual que un interruptor
 */

const header = document.getElementById("header");
console.log("lista de clases del header");
console.log(header.classList);

header.classList.add("fondo-dark");

const main = document.getElementById("main");

main.classList.remove("fondo-light");


const btntoggle = document.getElementById("botonToggle");

btntoggle.onclick = () => {
    header.classList.toggle("fondo-dark");
};

/**
 * elemento.setAttribute(atributo, valor)
 * setea el atributo
 */
/** forma 1 */
const link = document.getElementById("link");
link.setAttribute("href", "https://bingo.com");

/** forma 2  ofiales en las etiquetas HTML*/

link.href = "https://bingo.com";

/**
 * 
 */

const seccion1 = document.getElementById("seccion1");
seccion1.setAttribute("clave", "123456");


/**
 * element.getAttribute
 * obtiene el valor del atributo de un elemento en el DOM
 */
console.log(btntoggle.toggleAttribute("id"));