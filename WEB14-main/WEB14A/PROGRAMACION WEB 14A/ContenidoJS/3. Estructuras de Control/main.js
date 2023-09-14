'use strict';
//Estructura de control
let number1 =3 ;
let number2 = 100;


if( number1 > 10) {
    console.log('es mayor que 10');
} else {
    if( numero1 % 2 == 0){

    } else {

    }

}
 //Terneario
  let respuesta = (number2% 10 == 0) ? "Es multiplo de 10 " : "No es multiplo de 10";
console.log(respuesta);

//Switch
let opcion = 3;
switch(opcion) {
    case 1:
        console.log('Es el numero 1');
        break;
    case 2:
        onsole.log('Es el numero 2');
        break; 
    case 3:
        console.log('Es el numero 3');
        break;
    default:
        console.log('Opcion fuera de rango');
}
//Switch por rangos
let nota = 3.5;
switch(true){
    case nota >=0 && nota < 3.0:
        console.log('Aplazado');
        break;
    case nota >=3.0 && nota <=5.0:
        console.log('Aprobado');
        break;
    default:
        console.log('Nota erronea');
}