let mostrarFecha = document.getElementById('fecha');
let mostrarReloj = document.getElementById('reloj');
let fecha = new Date(); 

setInterval(() => { // funcion que ejecuta funcion con intervalo de 1"
    let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let diaMes = fecha.getDate() < 10 ? '0' + fecha.getDate() : fecha.getDate();
    let mesAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    mostrarFecha.innerText = `${diaSemana[fecha.getDay()]} ${diaMes} de ${mesAnio[fecha.getMonth()]} de ${fecha.getFullYear()}`;
    let hora = new Date();
    mostrarReloj.innerHTML = hora.toLocaleTimeString() // trae la hora al template
}, 1000)

