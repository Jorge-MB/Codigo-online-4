/**
 * funciones
 */

function tablaMultiplicar(numero) {
    for (let c = 0; c <= 10; c++) {
        console.log(`${c}x${numero} = ${c*numero}`);
    }
}
tablaMultiplicar(8);
console.log("-------------");
tablaMultiplicar(9);
console.log("-------------");
tablaMultiplicar(10);

/**
 * imprimir la tabla de multiplicar de todos los elementos
 * del arreglo llamado arreglo
 */

let arreglo = [5, 8, 4, 7, 2, 3];

for (let c = 0; c < arreglo.length; c++) {
    console.log(`tabla del ${arreglo[c]}`);
    tablaMultiplicar(arreglo[c]);
}