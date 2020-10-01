/**
 * 
 */

const header = document.getElementById("header")

console.log(header);

/**
 * document.getElemetsByClassName(nombre_de_clase_en_comun)
 * retorna un arreglo de elemetos que el DOM, 
 */

const cajas = document.getElementsByClassName("caja");
console.log(cajas);
console.log(cajas[0]);

/**
 * TIP: como covertir un HTLM collectiono cualquier otra estructura que tenga la forma de un arreglo a un arreglo nativo
 * 
 */

const cajasArray = Array.from(cajas);
console.log(cajasArray);

/**
 * document.querySelector("selector_tipo_css")
 * Devuelve el primer o unico lemento que coincida con el selector
 * docuemnt.querySelectorAll("selector_tipo_css")
 * devuelve todos los elementos que coincidan con el selector
 * el # representa el ID
 */

const main = document.querySelector("#main");
console.log(main);
/**
 * todos los elementos retornados por los disitntos selectores son del tipo "element"
 */