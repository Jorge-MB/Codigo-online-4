/**
 * hacer un algoritmo para calcular el
 * factorial de un numero
 * ejm factorial de 5= 5x4x6x2x1=120
 * ejm fact de 4 = 4x3x2x1=24
 */

let productototal = 1;
const nro = 5;

for (let c = nro; c > 0; c--) {
    productototal = productototal * c;
}
console.log(`Rspta ${productototal}`);



/**
 * 
 */

let n = 5;
let total = 1;

for (i = 1; i <= n; i++) {
    total = total * i;
}
console.log(total);