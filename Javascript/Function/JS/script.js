// console.log("External JS")
function SayHello() {
    console.log("Hello There!!!");
}
SayHello();

function Add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
console.log(Add(10,15));
console.log(Add("Hello ", "Lavanya..."))
console.log(Add("Hello ", 10))

// Function Expression
const SayHi = function () {
    console.log("Hello World!!");
}
SayHi();

const Sum = function (num1, num2) {
    const sum = num1 + num2;
    return sum;
}
const result = Sum("Hello ", "Mahee...");
console.log(result);

//Arrow Function
const Greet = () => {
    console.log("Hello World!!")
}
Greet()

const Summation = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
console.log(Summation(12,12))







