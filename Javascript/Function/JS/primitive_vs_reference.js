/**
 * Primitive Types
 *  string
 *  number
 *  boolean
 * 
 * Reference Types
 *  array
 *  object
 * 
 * 
 */

let num1 = 5;
let num2 = num1;

console.log("num1: " + num1);
console.log("num2: " + num2);

//Changing num2
num2 = 10;
console.log("After changing num2 from 5 to 10");
console.log("num1: " + num1);
console.log("num2: " + num2);

//Changing num1
num1 = 1;
console.log("After changing num1 from 5 to 1");
console.log("num1: " + num1);
console.log("num2: " + num2);

//Now if we do the same thing in reference type it get's messed up

const obj1 = {name: 'john'}
const obj2 = obj1;
console.log(obj1);
console.log(obj2);

//Now changing obj2
obj2['name'] = 'chill';
console.log("After changing obj2..")
console.log(obj1);
console.log(obj2);

