/**
 * Destructuring of arrays and objects
 */

const arr = ['a', 'b', 'c'];
const a = arr[0];
console.log(a); //a

const b = arr[1];
console.log(b); //b

const c = arr[2];
console.log(c); //c

//Shortcut to do the same thing using Array Destructuring
const [d, e, f] = arr;

//No need to map all the values
let [x, y] = arr;

// Object Destructuring
const obj = {key1: 1, key2: 2, key3: 3}

// const key1 = obj.key1;
// const key2 = obj.key2;
// const key3 = obj.key3;

// Shortcut for doing the same thing as above using Object destructuring
const {key1, key2, key3} = obj;

console.log(key1); //1
console.log(key2); //2
console.log(key3); //3


// No need to map all the properties
// const {key1 } = obj;


// We can change the variable name
const {key1: prop1} = obj;
console.log(prop1) //1