/** tarea libro pag 43 44 45 */
/** area de un trinagulo */
let base = +prompt("ingrese base del triangulo");
let altura = +prompt("ingrese altura del triangulo");
area = ((base * altura) / 2);
alert(`El area del triangulo es: ${area}`);

/** adquerir dolares con moneda mexicana */

let moneda = +prompt("ingrese moneda mexicana");
let p_dolar = +prompt("Ingrese precio dolar");

cambio = moneda / p_dolar;
alert(`Dolares a adquerir: ${cambio}`);

/** determinar edad de la persona */

anio_actual = (new Date).getFullYear();
// console.log(`anio actual ${anio_actual}`);
let anio_nac = +prompt("Año de nacimento");
edad = anio_actual - anio_nac;

alert(`Edad: ${edad}`);

/** cbor de estacionamiento */
let precio_alquiler = +prompt("Ingrese precio alquiler");
let tiempo_alquiler = +prompt("ingrese tiempo de alquiler");
hora_completa = Math.round(tiempo_alquiler);
total_pago = precio_alquiler * hora_completa;
alert(` total a pagar por estacionamiento: ${total_pago}`);

/**
 *
 */