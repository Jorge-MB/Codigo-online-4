/**
 * 
 * @param {*} numero funciones flecha
 */

// const tablaMultiplicar = function(numero) {
//     for (let c = 0; c <= 10; c++) {

//         console.log(`${c} x ${numero} = ${c*numero}`);
//     }
// };

/**
 * una funcion de flecha es una funcion anonima
 * solo que esta escrito en sintaxis moderna de js
 */
const tablaMultiplicar = (numero) => {
    for (let c = 0; c <= 10; c++) {

        console.log(`${c} x ${numero} = ${c*numero}`);
    }
};
tablaMultiplicar(17);