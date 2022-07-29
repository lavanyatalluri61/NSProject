function multiply(num) {
    let multiplier = 10;
    return num * multiplier;
}
//console.log(multiplier);// error: multiplier is not defined
console.log(multiply(5)); //50

//Problem: we are looking for a generic multiplier function which can gives us a unique multiplier function

function multiply_x(multiplier) {
    return function(num) {
        return multiplier * num;
    }
}

const multiply_10 = multiply_x(10);
console.log(multiply_10(5)); //50

const multiply_20 = multiply_x(20);
console.log(multiply_20(5)); //100
