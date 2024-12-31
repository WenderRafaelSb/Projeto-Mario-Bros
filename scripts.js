const formulario = document.querySelector("#formulario-dados")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm() {
    formulario.style.left = "50%"
    formulario.style.transform = "translate(-50%)"
    mascara.style.visibility = "visible"
};

const formInvisible = document.querySelector("#formulario-dados")

function esconderForm() {
    formInvisible.style.left = "-237px"
    formInvisible.style.transform = "translate(0)"
    mascara.style.visibility = "hidden"
};

