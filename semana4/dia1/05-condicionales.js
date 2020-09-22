/**
 * crear un algoritmo para verificar año bisiesto
 * 
 * teoria
 * los años  bisiestos son los divisibles entre 4
 * excepto si es divisible entre 100
 * 
 * o que simplemente sea divisible entre 400
 */

const anio = 2100;

if (anio % 4 === 0) {
    if (anio % 100 !== 0) {
        console.log(`${anio} es bisiesto`);
    } else {
        console.log(`${anio} no es bisiesto`);
    }
} else {
    if (anio % 400 === 0) {
        console.log(`${anio} es bisiesto`);
    } else {
        console.log(`${anio} no es bisiesto`);
    }
}

/**
 * forma simplificada
 */

if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    console.log(`${anio} es bisiesto`);
} else {
    console.log(`${anio} no es bisiesto`);
}