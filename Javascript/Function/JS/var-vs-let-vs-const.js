/**
 * 
 * var                          let                         const
 * ***************************************************************************************************
 * 1. redeclarable              1. not redeclarable         1. not redeclarable
 * 
 * 2. Global and                2. Global, function, Block  2. Global, function, Block            2. 
 *  function scope                  scope                       scope
 * 
 * 3. hoisted                   3. not hoisted              3. not hoisted                          
 * 
 * 4. In global scope           4. Not                      4. Not
 * becomes window property
 * 
 * 5. Value can be changed      5. Value can be changed     5. Value cannot be changed
 */

//1. Only var is a Redeclarable
var a = 10;
var a = "somestr"

let x = 10;
//let x = "somestr";  //Illegal

const y = 10;
//const y = "somestr";  //Illegal

//2. Only let and const also support block scope unlike var
//block scope: any code blocks inside curly braces {}

{
    let block_let = 1;
    const block_const = 2;
    var block_var = 3;
}
// console.log(block_let);  //Error
// console.log(block_const); //Error
console.log(block_var);  //3

//3. Only var is hoisted
//compiler interprets above code like below
function some_func() {
    a = 20;
    console.log(a); //20
    var a = 10;
}
some_func();

//4. Any variable declared using 'var' keyword in global scope becomes a window property

var some = 10;
console.log(window.some);// 10;

let some_let = 10;
console.log(window.some_let);// undefined;

const some_const = 10;
console.log(window.some_const);// undefined;

//5. value can be change









