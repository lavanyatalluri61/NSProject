//All about funtion arguments
//during function defintion the num is known as parameter
//and the value 5 is known as argument
function multiply_10(num) {
    return num * 10;
}
const result = multiply_10(5);
console.log(result);

function add_multiple(n1, n2, n3, n4, n5, n6, n7) {
    return n1 + n2 + n3 + n4 + n5 + n6 + n7;
}
const sum = add_multiple(1,2,3,4,5,6,7)
console.log(sum)

// if we don't pass an argument to a function then it stays undefined
function Greeting(name) {
    const greet = "Hello! " + name + ", How are you doing";
    console.log(greet);
}
Greeting()  // Hello! undefined, How are you doing
Greeting("Ram") // Hello! Ram, How are you doing


//Default Value for Arguments
function power(num, pow)  {
    return num**pow;
}
console.log(power(2,3)) //8
console.log(power(2)) 




