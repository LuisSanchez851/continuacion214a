"use strict";
let cadMeses = "Enero-Febrero-Marzo-Abril-Mayo-Junio-Julio";
let myArray = cadMeses.split("-");
console.log(myArray);

//Buscar elemento en un arreglo, sino lo encuentra vuelve a underfined
 const busqueda = myArray.find((e) => e ==="Febrero");
 console.log(busqueda);
 //2. Buscar indice sino lo encuentra devuelve a -1
 const indice =  myArray.findIndex((e) => e ==="Mayo");
 console.log(indice);
//3. Crea un objeto iterable
const array =[3,4,5,6,7,8,9];
const arrayCuadrados = Array.from(array, (e)=> e * e);
console.log( typeof(arrayCuadrados));
console.log(arrayCuadrados);
//4.Filtrar  datos
const result = array.filter((e)=> e % 3 === 0);
console.log(result);

