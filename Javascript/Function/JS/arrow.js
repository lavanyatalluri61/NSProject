function multiply_10(num) {
    return num * num;
}
const square = (num) => {
    return num * num;
}

const add = (num1, num2) => num1 + num2;
console.log(add(2,3));

const square1 = (num) => num * num;
console.log(square1(3));

// NOTE: Cannot ommit parenthesis in case of multiple args
// const add = num1, num2 => num1 + num2;   // Illegal
// const add = (num1, num2) => num1 + num2;   // Legal

