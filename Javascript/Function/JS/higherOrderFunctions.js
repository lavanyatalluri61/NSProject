function mul_10(num) {
    return num * 10;
}

console.log(mul_10(5));

// Higher ordee function
/* Any function which returns or take functions as arguments*/
function func1() {
    return function func2() {
        return 'Hi';
    }
}

let result = func1();
let final_result = result();
console.log(final_result); 