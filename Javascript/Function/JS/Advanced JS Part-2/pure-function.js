/**
 * Any function which on some given input always return the same output  is a pure function.
 * 
 */
//Pure function
function mul_10(num) {
    return num * 10;
}

console.log(mul_10(5)); //50 it will always be 50

//Impure function
function get_random_num_char(str) {
    const rand_index = Math.floor(str.length * Math.random());
    return str[rand_index];
}
console.log(get_random_num_char('abcdef')); // always given different value

