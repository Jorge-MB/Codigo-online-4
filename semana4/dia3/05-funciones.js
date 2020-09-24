/**
 * funciones que retornan un parametro
 */
/**
 * funcion que retorna el factorial de un numero
 * @param {*} numero  paramentro de entrada al que se le va a calcular el factorial
 */

function factorial(numero) {
    let rpta = 1;
    for (let c = numero; c > 0; c--) {
        rpta = rpta * c;
    }
    return rpta;
}

let resultado = factorial(6);
console.log(resultado);