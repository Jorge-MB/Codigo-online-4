/**
 * funciones anonimas
 * se guardan en variables
 */


// function tablaMultiplicar(numero) {
//     for (let c = 0; c <= 10; c++) {
//         console.log(`${c}x${numero} = ${c*numero}`);
//     }
// }

let tablaMultiplicar = function(numero) {
    for (let c = 0; c <= 10; c++) {

        console.log(`${c} x ${numero} = ${c*numero}`);
    }
}
tablaMultiplicar(5);