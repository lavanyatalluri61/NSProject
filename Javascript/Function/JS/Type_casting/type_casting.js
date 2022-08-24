const num = 23;
const str = "20";
console.log(num + str); //2320

//Explicit Type Casting to string type
const n = 23;
const b = true;
const arr = [1,2,3];
console.log(String(n)); //"23"
console.log(String(b)); //"true"
console.log(String(arr)); "1,2,3"

//Explicit Type Casting to boolean type
const n1 = 0;
const n2 = 100;
const s1 = '';
const s2 = 'hi';
const arr1 = [];
const arr2 = [1,2,3];
const obj1 = {};
const obj2 = {age: 20};
console.log(Boolean(n1));  //false
console.log(Boolean(n2));  //true

console.log(Boolean(s1));  //false
console.log(Boolean(s2));  //true

console.log(Boolean(arr1)); //true
console.log(Boolean(arr2)); //true

console.log(Boolean(obj1)); //true
console.log(Boolean(obj2)); //true

console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(2));            //true

//Explicit Type Casting to Number type
const ns1 = "hello123"
console.log(Number(ns1));  //NaN 

const ns2 = "1234";
console.log(Number(ns2));  //1234

const nb = true;
console.log(Number(nb));  //1

const nb2 = false;
console.log(Number(nb2));  //0

//Implict Type Casting examples

/**
 * Whenever we have a string as an operand for + operator then
 * both the operand are teated as a string.
 * 
 * and non-string operands are implicitly type casted to a string type
 */
//string addition
const nu = 23;
const st = "20";
console.log(String(nu) + st);


/**
 * variables inside if() are implicitly type casted to boolean type
 */

let som_var = null;

if(some_var) {
    console.log("this line will not be logged");
}
