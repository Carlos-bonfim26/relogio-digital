const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let diaNumero = dateToday.getDay();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

let diaNome = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

if(hr < 10) hr = '0' + hr;
if(min < 10) min = '0' + min;
if(seg < 10) seg = '0' + seg;
document.getElementById('dias').innerHTML = diaNome[diaNumero];
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})