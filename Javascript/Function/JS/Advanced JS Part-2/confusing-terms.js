/**
 * Higher order functions. 
 * 
 * Any function that returns another function or take 
 * another function as an argument are example of higher function.
 * 
 */
function higher_order_func() {
    return function() {
        console.log('hi');
    }
}
higher_order_func()();

/**
 * Anonyms or Lambda functions
 * 
 * These are functions without names and mostly to be used are
 * arguments to another functions
 * 
 * In below example,
 * first arg i.e; below function is an example of anonyms or lambda function
 */

setTimeout(() => {
    console.log('hi after 1 sec');
}, 1000);

const arr = [1, 2, 3]
//arr.filter((item) => item % 2 === 0);
arr.filter(function(item) {
    return item % 2 === 0;
});

/**
 * In JS, functions can be treated as variables.
 * Therefore they have passed as arg to functions, can be redeclared
 * 
 * Hence functions are called First class functions.
 * 
 */
const func = () => {
    console.log('hi');
}
const high_func = (callback) => {
    callback();
}
high_func(func);
func = () => {
    console.log('bye');
}

/**
 * Normal functions with names are called named functions
 * 
 * Eg: print_hi() is a named function
 */

function print_hi() {
    console.log('hi');
}
print_hi();

/**
 * function expression
 * 
 * const func = function () {
 *      // function code
 * }
 * 
 * 
 * 
 * function declaration 
 * 
 * function func() {
 *      //function code
 * }
 * 
 */

















