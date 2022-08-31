// function sum(a=5, b=5) {
    
// }

/**
 * Rest operator is a way to extract arguments values from arrays and objects
 * in functions arguments.
 * 
 * It basically converts multiple arguments into a single array
 */
function add_numbers(...numbers) {
    console.log(numbers);
    const sum = numbers.reduce((sum, num) => sum + num, 0);
    return sum;
}

console.log(add_numbers(1,2,3,4,5));
console.log(add_numbers(1,2,3,4,5,6,7,8,9,10));

function add_numbers_to(mul1, mul2, ...c) {
    console.log("mul1: " + mul1);
    console.log("mul2: " + mul2);
    console.log("c: " + c);
    let sum = c.reduce((sum, num) => sum + num, 0);
    sum *= mul1;
    sum *= mul2;
    return sum;
}
console.log(add_numbers_to(10,20,1,2,3,4,5));

/**
 * write  a function using spread operator that can take any number of 
 * arguments and returns the maximum number among the arguments..
 * 
 */

function find_max(...numbers) {
    console.log("numbers:" + numbers);
    const max_num = numbers.reduce((max_num, num) => Math.max(max_num, num) , 0);
    return max_num;
}
console.log(find_max(1,2,3,4,5));  //5
console.log(find_max(-10,-2, 0, -5, -100)); //0

// function find_max(...numbers) {
//     let max = -Infinity;

//     for (let i = 0; i < numbers.length; i++) {
//        if(max < numbers[i])
//             max = numbers[i];
//     }

//     return max;
// }