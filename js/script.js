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
// Creamos la función reutilizable con el total devengado

function obtenerTotalDevengos() {
    return Number(salario.value) + Number(plusResidencia.value) + Number(complemento.value) + Number(especialidad.value) + Number(sgm.value);
}

function calcularDevengos() {
    if (salario.value === "") {
        document.getElementById('totalDevengos').value = "";
        SS.value = "";
        return;
    }else if (salario.value < 600) {
        document.getElementById('totalDevengos').value = "";
        SS.value = "";
        return;
    }

    const totalDevengos = obtenerTotalDevengos();
    const baseCotizacion = totalDevengos + prorrataPagasExtra + prorrataBolsaVacaciones;

    document.getElementById('totalDevengos').value = totalDevengos.toFixed(2) + " €";

    SS.value = (baseCotizacion * 0.047 + baseCotizacion * 0.0155 + baseCotizacion * 0.001 + baseCotizacion * 0.0015).toFixed(2);
}

botonDevengos.addEventListener("click", calcularDevengos);


//CALCULO DEDUCCIONES
// Creamos la función reutilizable con el total deducido

function obtenerTotalDeducciones() {
    return Number(SS.value) + obtenerTotalDevengos() * (Number(IRPF.value) / 100);
}

function calcularDeducciones() {
    if(IRPF.value === ""){
        document.getElementById('totalDeducciones').value = "";
        return;
    }
    const totalDeducciones = obtenerTotalDeducciones();
    document.getElementById('totalDeducciones').value = totalDeducciones.toFixed(2) + " €";
}

botonDeducciones.addEventListener("click", calcularDeducciones);

// CALCULO TOTAL LIQUIDO

const botonLiquido = document.getElementById('botonLiquido');
const parrafoLiquido = document.querySelector('.oculto');

botonLiquido.addEventListener("click", () => {
    if (salario.value === "" || IRPF.value === "") {
        parrafoLiquido.hidden = true;
        return;
    }
    const totalDevengos = obtenerTotalDevengos();
    const totalDeducciones = obtenerTotalDeducciones();
    const totalLiquido = totalDevengos - totalDeducciones;
    parrafoLiquido.textContent = totalLiquido.toFixed(2) + " €";
    parrafoLiquido.hidden = false;
});



// CAMBIO DE TEMA CLARO / OSCURO

const botonTema = document.getElementById('botonTema');

function aplicarTema(tema) {
    document.documentElement.dataset.tema = tema;
    botonTema.textContent = tema === 'claro' ? '🌙 Modo oscuro' : '☀️ Modo claro';
    localStorage.setItem('tema', tema);   // recuerda la elección al recargar
}

// Al cargar la página, usa el tema guardado (o el oscuro por defecto)
aplicarTema(localStorage.getItem('tema') || 'oscuro');

botonTema.addEventListener('click', () => {
    const temaActual = document.documentElement.dataset.tema;
    aplicarTema(temaActual === 'claro' ? 'oscuro' : 'claro');
});