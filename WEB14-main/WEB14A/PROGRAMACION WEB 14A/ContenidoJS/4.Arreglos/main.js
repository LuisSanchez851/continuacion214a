'use strict';
//Declarar un arreglo
const myArray1 = [2,4,6,8,9, '3', true];
//For normal
let myArray2  = new Array('1','2',3,4,5,6,7,);
for( let i=0; i<myArray.length; i++){
    console.log(myArray[i]);
}
// For in y for on
for(let i in myArray2){
    console.log(myArray2[i]);

}
 for( let j of myArray2){
    console.log(j);

 }

 //forEach
 myArray1.forEach(e => {
    console.log(e);

 });