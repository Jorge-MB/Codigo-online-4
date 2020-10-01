/**
 * 
 */
const estilos = document.getElementById("estilos");
const btntema = document.getElementById("btntema");

btntema.onclick = () => {
    const tema = estilos.getAttribute("href");
    if (tema === "./05-light.css") {
        estilos.setAttribute("href", "./05-dark.css");

    } else {
        estilos.setAttribute("href", "./05-light.css");
    }
};