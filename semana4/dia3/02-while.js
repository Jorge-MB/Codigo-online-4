let rpta = "s";
let sumatoria = 0;

while (rpta === "s") {
    let nro = +prompt("Ingrese un numero");
    sumatoria = sumatoria + nro;
    rpta = prompt("Desea  segir ingresando Si (s) NO (n)");
    while (rpta !== "s" && rpta !== "n") {
        rpta = prompt("error ! ingrese una respuesta valida Si (s) No (n)")
    }
}

console.log(`Sumatoria total ${sumatoria}`);