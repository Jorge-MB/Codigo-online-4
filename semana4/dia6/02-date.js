/**
 * date es la clase o tipo de dato que nos ayudara a trabjar con fechas
 */
let hoy = new Date();
console.log(hoy);

/**
 * fecha.getFullYear 
 * retorna el año en un objeto date
 */

let año = hoy.getFullYear();
console.log(año);

/**fecha.getMoth()*
 * retorna el numero del mes
 * */

let mes = hoy.getMonth();
console.log(mes);

/**
 * fecha.getDate
 * retorna el dia del mes
 */

let diaMes = hoy.getDate();
console.log(diaMes);


/**fecha.getDay 
 * retorna dia de la semana
 * **/
let diaSemana = hoy.getDay();
console.log(diaSemana);

/***
 * 
 */

let horas = hoy.getHours();
let minutos = hoy.getMinutes();
let segundos = hoy.getSeconds();
let milesegundos = hoy.getMilliseconds();
console.log(`hora= ${horas} : ${minutos}: ${segundos}: ${milesegundos}`);

/** como inizializo un objeto date con una fecha distinta
 * 
 */

let halloweed2020 = new Date(2020, 9, 31);
console.log(halloweed2020);

let halloweedMesHoy = halloweed2020 - hoy;
console.log(halloweedMesHoy);

let diasparahalloweed = (((halloweedMesHoy / 1000) / 60) / 60) / 24;

console.log(diasparahalloweed);

/*** numero.toFixed
 * retorna numero redondeado
 */

console.log(diasparahalloweed.toFixed(0));

/**
 * inicializar una fecha formato UNix
 * new date (millisegundos) (millisegundos desde UNIx (1 enero 1970))
 */

let fechapronostico = new Date(1601143200 * 1000);
console.log(fechapronostico);