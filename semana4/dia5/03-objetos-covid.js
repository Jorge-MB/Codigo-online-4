/**
 * funcion para recibir un nombre de pais intorucido por el usuario y mostrar
 * total de casos
 * total de recuperados
 * total de fallecidos
 */
//debugger;
const mostrarDataporpais = (pais) => {
    for (let c = 0; c < covid.length; c++) {
        if (covid[c].country === pais) {
            console.log(covid[c]);
            return;
            // return true;
        }


    }
};
mostrarDataporpais("Brazil");
/**
 * mostrar data x pais con find
 */

const mostrarDataporpaisV2 = (pais) => {
    const paisEcontrado = covid.find((estadistica) => {
        if (estadistica.country === pais) {
            return estadistica;
        }
    });
    //console.log(paisEcontrado);
    let encontrado = {
        nombrePais: paisEcontrado.country,
        totalCasos: paisEcontrado.cases,
        totalRecuperados: paisEcontrado.recovered,
        totalFallecidos: paisEcontrado.deaths,
    };
    console.log(encontrado);
};

mostrarDataporpaisV2("Peru");