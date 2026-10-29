// CALCULO DEVENGOS

const salario = document.getElementById('salario');
const plusResidencia = document.getElementById('plusResidencia');
const complemento = document.getElementById('complemento');
const especialidad = document.getElementById('especialidad');
const sgm = document.getElementById('sgm');

const botonDevengos = document.getElementById('botonDevengos');

function calcularDevengos() {
    const totalDevengos = salario.value + plusResidencia.value + complemento.value + especialidad.value + sgm.value;
    return totalDevengos;
}

document.addEventListener('submit', (e) => {
    e.preventDefault();
});

botonDevengos.addEventListener("click", () => {
    const total = calcularDevengos();
    document.getElementById('totalDevengos').value = total;
});






//CALCULO DEDUCCIONES
const seguridadSocial = document.getElementById('SeguridadSocial');
const impuestos = document.getElementById('RetencionIRPF');

function calcularDeducciones() {
    const totalDeducciones = parseFloat(seguridadSocial.value) + parseFloat(impuestos.value);
    return totalDeducciones;
}