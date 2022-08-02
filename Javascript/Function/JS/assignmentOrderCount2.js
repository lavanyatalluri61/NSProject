// let generateOrder = function(starting) {
//     let counter = 0;
//     return function() {
//         counter = counter + 1;
//         console.log('Total orders = ' + counter);
//     }
// }

//Assignment2:
function countBy(initial) {
    let current = initial;
    return function(num) {
        current += num;
        return current;
    }   
}

const count = countBy(4) // initial value of counter 4, returns a function

console. log(count(2)) // prints 6 because 4 + 2

console. log(count(-4)) // prints 2 because 6 - 4

console. log(count(8)) // prints 10 because 2 + 8

console.log()

function mul() {
    // write your code  here
        let m = 1;
        return function(num) {
            m = m * num;
            return m;
        }
    }
mul(1)(5)(2);
