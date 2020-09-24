/**
 * 
 */

debugger;

const areaCirculo = (r) => {
    const pi = 3.1416
    const cuadrado = (n) => {
        return n * n;
    };
    return pi * cuadrado(r);
}

console.log(areaCirculo(15));