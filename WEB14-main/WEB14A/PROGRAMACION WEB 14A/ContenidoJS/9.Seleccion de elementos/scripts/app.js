//seleccion de elemento por id
const seccion1 = document.getElementById('sec1');
console.log(seccion1);
//seleccion de elementos por clase
const mainContainer = document.getElementByIdClassName('container_main');
console.log(mainContainer);
//seleccion de elementos por nombre
const articulos = document.getElementByIdName('articulo');
//sleeccion de elementos por id con queryselector
const seccion2 = document.querySelector('#sec2');
console.log(seccion2);
//seleccion por etiqueta
const titulo = document.querySelector('h1');
console.log(titulo);
//sleeccion por class
const seccion2Class = document.querySelector('seccion2');
const reciboDato =()=>{
    const texto = document.querySelector('#nombre').value;
    console.log(texto);
}
