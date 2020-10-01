const mensaje = document.getElementById("mensaje");
const pais = document.getElementById("pais");
const helper = document.getElementById("helper");

/***
 * onkeyup= evento que se dispara cuando una tecla es soltada luego de presionarla
 * 
 * onkeydow= evento que se dispara cuando una tecla esta presionada
 * onkeypress= union de anbos eventos
 */

mensaje.onkeyup = (evento) => {
    if (mensaje.value.length >= 130) {
        mensaje.value = mensaje.value.substr(0, 130);

    }
    const cantidad = 130 - mensaje.value.length;
    helper.innerText = `${cantidad} caracteres`;
};

/**
 * onchange
 * funcion que se ejecuta cada vez que un elemento cambia de valor
 */

pais.onchange = (evento) => {
    console.log(evento);
    console.log(pais.value);
}