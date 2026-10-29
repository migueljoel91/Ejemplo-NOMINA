document.addEventListener('submit', (e) => {
    e.preventDefault();
});

//DECLARACION DE CONSTANTES Y VARIABLES

//Devengos
const salario = (document.getElementById('salario'));
const plusResidencia = (document.getElementById('plusResidencia'));
const complemento = (document.getElementById('complemento'));
const especialidad = (document.getElementById('especialidad'));
const sgm = (document.getElementById('sgm'));

const botonDevengos = document.getElementById('botonDevengos');

//Deducciones
const prorrataPagasExtra = 152.79;
const prorrataBolsaVacaciones = 28.05;

const SS = document.getElementById('seguridadSocial');
const IRPF = document.getElementById('impuestos');

const botonDeducciones = document.getElementById('botonDeducciones');



// CALCULOS DEVENGOS

// Devuelve el número (sin formato), para poder reutilizarlo
function obtenerTotalDevengos() {
    return Number(salario.value) + Number(plusResidencia.value) + Number(complemento.value) + Number(especialidad.value) + Number(sgm.value);
}


function calcularDevengos() {
    const totalDevengos = obtenerTotalDevengos();
    const baseCotizacion = totalDevengos + prorrataPagasExtra + prorrataBolsaVacaciones;

    document.getElementById('totalDevengos').value = totalDevengos.toFixed(2) + " €";

    SS.value = (baseCotizacion * 0.047 + baseCotizacion * 0.0155 + baseCotizacion * 0.001 + baseCotizacion * 0.0015).toFixed(2);
}

botonDevengos.addEventListener("click", calcularDevengos);


//CALCULO DEDUCCIONES
function calcularDeducciones() {
    const totalDevengos = obtenerTotalDevengos()
    const retencionIRPF = totalDevengos * (Number(IRPF.value) / 100);
    const totalDeducciones = Number(SS.value) + retencionIRPF;

    document.getElementById('totalDeducciones').value = totalDeducciones.toFixed(2) + " €";
}

botonDeducciones.addEventListener("click", calcularDeducciones);

// CALCULO TOTAL LIQUIDO
const botonLiquido = document.getElementById('botonLiquido');
const parrafoLiquido = document.querySelector('.oculto');

botonLiquido.addEventListener("click", () => {
    const totalDevengos = obtenerTotalDevengos();
    const totalDeducciones = Number(SS.value) + totalDevengos * (Number(IRPF.value) / 100);
    const totalLiquido = totalDevengos - totalDeducciones;
    parrafoLiquido.textContent = totalLiquido.toFixed(2) + " €";
    parrafoLiquido.hidden = false;
});