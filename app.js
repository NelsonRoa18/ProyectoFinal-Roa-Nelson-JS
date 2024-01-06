/// Lanzo el modal a penas carga la pagina
$(document).ready(function () {
    $('#myModal').modal('toggle')
});

var DateTime = luxon.DateTime;


///Variable donde guardo los pacientes puestos en el localstorage
let pacientes = JSON.parse(localStorage.getItem('Pacientes'));

/// Declaro un array vacio para poder guardar los turnos
let turnos = [];
/// Declaro un array vacio para cargarlo con las horas
let horas = [];
/// Declaro una varaible para poder comparar luego 
let fechaActual = "";
let horaActual = "";
/// Obtengo todos los elementos que usare en el programa
const btnAdministrador = document.getElementById('administrador');

const btnPaciente = document.getElementById('paciente');

const btnSalir = document.getElementById('salir')

const divBotones = document.getElementById('botones');

const preguntaUsuario = document.getElementById('pregunta__a__usuario');

const tabla = document.getElementById('div__contenedor__tabla');

const tablaTurnos = document.getElementById('turnos');

const divInputPacientes = document.getElementById('div__input__pacientes');

const tituloBienvenidaAdministrador = document.getElementById('bienvenida__administrador');

const tituloBienvenidaPaciente = document.getElementById('bienvenida__paciente');

const formPaciente = document.getElementById('form__paciente');

const selectEspecialistas = document.getElementById('especialistas');

const fechaInput = document.getElementById('fecha__input');

const selectHoraTurno = document.getElementById('hora__input');

const btnReservarTurno = document.getElementById('btn__turno');

const buscarTurnosDelEspecialista = document.getElementById('especialista__a__filtrar');

const cantPacientes = document.getElementById('cant__de__pacientes');

const divCantPacientes = document.getElementById('cant__pacientes');



btnAdministrador.addEventListener("click", muestraTablaYBoton);

btnAdministrador.addEventListener("click", ocultaBoton);


btnAdministrador.addEventListener("click", traerTurnos);

btnPaciente.addEventListener("click", muestraInputYBoton);
btnPaciente.addEventListener("click", ocultaBoton);



selectEspecialistas.addEventListener("change", muestraFormPacientes);

formPaciente.addEventListener("submit", reservarTurno);

buscarTurnosDelEspecialista.addEventListener("change", filtrar);





btnSalir.addEventListener("click", salir);

obtenerEspecialistas();
traerTurnos();

