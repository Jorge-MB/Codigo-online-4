/**
 * dado un monto ingresado por el usuario
 * calcular 
 * billetes de 200
 * billetes de  100
 * billetes de  50
 * billetes de  20
 * que ele cajero debe entregar
 * tarea pagina 43, 44, 45
 */

let monto = 1980;
console.log(`Nuevo inicial = ${monto}`);
let b200 = 0;
let b100 = 0;
let b50 = 0;
let b20 = 0;

b200 = (monto - (monto % 200)) / 200;
monto = monto - b200 * 200;
// console.log(`Nuevo monto = ${monto}`);

b100 = (monto - (monto % 100)) / 100;
monto = monto - b100 * 100;
// console.log(`Nuevo monto = ${monto}`);

b50 = (monto - (monto % 50)) / 50;
monto = monto - b50 * 50;
// console.log(`Nuevo monto = ${monto}`);

b20 = (monto - (monto % 20)) / 20;
monto = monto - b20 * 20;

console.log(`b200 = ${b200}`);
console.log(`b100 = ${b100}`);
console.log(`b50 = ${b50}`);
console.log(`b20 = ${b20}`);
console.log(`queda monto soles = ${monto}`);