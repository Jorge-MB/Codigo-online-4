let peso = +prompt("ingrese peso kgs");
let altura = +prompt("ingrese altura en cm");
const imc = peso / (altura * altura);
console.log(imc);

if (imc <= 15) {
    console.log("el paciente presenta delgadez");
} else {

    if (imc > 25) {
        console.log("el pasiente presenta sobrepeso");
    } else {
        console.log("el pasiente presenta un peso ideal");
    }
}