/**
 * objeto element y sus propiedades
 */

const titulo = document.getElementById("title");
console.log(titulo);

/**
 * propiedades
 * element.style.[propiedadesCSS]
 * colocamos stylos como en los Css a los elementos
 */

titulo.style.color = "tomato";
titulo.style.fontSize = "3rem";

const seccion1 = document.getElementById("seccion1");

/**
 * element.offsetWidth --devuelve el ancho de un elemento
 * element.offsetHeigth--devuelve el alto de un elemento
 */

const anchoSeccion1 = seccion1.offsetWidth;
const aaltoSeccion1 = seccion1.offsetHeight;
console.log(`ancho de seccion ${anchoSeccion1}px`);
console.log(`alto de seccion ${aaltoSeccion1}px`);

/**
 * 
 */
const parrafo = document.getElementById("parrafo");
console.log("contenido html del parrafo");
console.log(parrafo.innerHTML);

console.log("contenido html del parrafo");
console.log(parrafo.innerText);