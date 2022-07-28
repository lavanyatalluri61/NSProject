//Write a function to calculate square
//input: 5
//output: 25
function square(num) {
    return num**2;
}
console.log(square(5));

//write a function to calculate BMI 

function bmi(w, h) {
    return w / (h**2);
}
console.log(bmi(100, 2));

//write a function to add two  amounts in dollars and return the result in INR.
//input: 100$, 200$
//1 dollar = 79.95 rupees
function add(a1, a2) {
    let k = 79.95 * (a1 + a2);
    return k.toFixed(2);
}
console.log(add(100, 200));




