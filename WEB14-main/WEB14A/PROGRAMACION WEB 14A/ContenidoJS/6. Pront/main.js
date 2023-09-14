'use strict';
//Pedir dos numero spositivos y realizar una suma, retornar el valor
//ds: suma
//de: dos numeros positivos 
const sumar =(num1, num2 ) =>{
    const response = (num1>0 && num2> 0) ? num1+num2 :"No se puede realizar la suma ";
    console.log(response);
    return response;


}

let number1 =  parseFloat (prompt('Dame el primer valor:'));
let numero2 = parseFloat(prompt('Dame el segundo numero:'));
console.log(numero1, numero2)
let suma = sumar(number1, numero2);
//console.log(suma);
alert(suma);

