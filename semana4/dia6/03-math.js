/**
 * clase math nos ayuda a trabajar con funciones matematicas
 * para usar la clase math y sus propiedades no se necesita crear un objeto
 * es clase estatica
 */

/**
 * math.random()
 */

let aleatorio = Math.random();
console.log(aleatorio);

/***
 * retornar un numero aleatorio entre un min y un max
 math.random()*(max-min)+min;
 */

let aleatorio50y100 = Math.random() * (100 - 50) + 50;
console.log(aleatorio50y100);

/**
 * obtener el piso de un numero
 es tenar la parte entera prxima inferios de un numero decimal
 ejm 16.99= 16
 5.85=5

 math.floor()
 */

let parteenteranumero = Math.floor(20.5);
console.log(parteenteranumero);

/**
 * obtener el techo de numero decimal
 * math.ceil(numero)
 */


let proxmoparteenteranumero = Math.ceil(20.1);
console.log(proxmoparteenteranumero);

/**
 * math.round(numero decimal)
 */
console.log(Math.round(52.3));