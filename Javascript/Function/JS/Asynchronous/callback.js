/**
 * Callback: It's just a function which is a passed as an argument
 * 
 * we can callback to do something after a time taking 
 * operations i.e; async tasks
 */

/** 
 let a = 10;

setTimeout(function() {
    a += 20;
}, 0);
console.log(a);
console.log(a);
console.log(a);
*/


//we cannot access address_book values here 
/**
let address_book = '';
setTimeout(function() {
    address_book = "address1, address2......";
}, 500);
console.log(address_book);
*/


//Examples of callback
function complex_add(num1, num2,cb) {
    //Let's assume next line is a time taking process
        const sum = num1 + num2;
        cb(sum);
}
complex_add(10, 20, function(result) {
    console.log('result is ' + result);
})

//Other Examples of callback
setTimeout(function() {
    console.log("Print Something..")
}, 1000);

//This is how the definition of setTimeout would be like inside browser
function setTimeout(callback, time_in_milliseconds) {
    //Some code to delay the execution by 'ime_in_milliseconds' milliseconds
    callback();
}