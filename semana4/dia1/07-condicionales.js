/**
 * suendo semanal de un trabajador
 * en base horas trabajadas
 */
let sueldo_semanal = 0;
let hora_trabajada = 42;
let pago_hora = 35;

if (hora_trabajada > 40) {
    sueldo_semanal = ((40 * pago_hora) + ((hora_trabajada - 40) * 2 * pago_hora));
} else {
    sueldo_semanal = hora_trabajada * pago_hora
}

console.log(`total a pagar ${sueldo_semanal}`)
    ///1400
    //1540