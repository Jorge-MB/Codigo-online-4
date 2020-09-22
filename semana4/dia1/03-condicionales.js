/** calcular el mayor de 3 numeros
 * asumiendo que son diferentes todos
 * los numeros pueden ser ingresados por el usuaio o declaradas 
 * al inicio del programa
 */

const nro1 = 20;
const nro2 = 23;
const nro3 = 10;

if (nro1 > nro2) {
    // numero 1 es mayor que dos
    if (nro1 > nro3) {
        // el numero un es mayor que numero 3
        console.log(`numero mayor es: ${nro1}`);
    } else {
        console.log(`el numero mayor es : ${nro3}`);
    }
} else {
    if (nro2 > nro3) {
        console.log(`el mumero mayor es ${nro2}`);
    } else {
        console.log(`el mumero mayor es ${nro3}`);
    }
}