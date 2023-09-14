'use strict';
//generar eventos metodo en la etiqueta
const capturaClick = () => {
    alert('Evento Click');

}
const capturaMouseOver = () => {
    console.log('MouseOver');
}
function teclaDown() {
    console.log('Presionando tecla');

}
//generar eventos por propiedad
const foot = document.querySelector('#footer');
foot.onclick =function(){
    console.log('On click en el footer');
}
// generar Evento por por el metodo .addEventListener

const parrafo = document.getElementById('parrafo1');
parrafo.addEventListener('click',() => {
    console.log('click en el parrafo');

});
    
