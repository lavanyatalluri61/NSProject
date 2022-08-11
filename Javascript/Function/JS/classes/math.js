/**
 * Math class provides with a lot of helpful mathetical functions
 * 
 */

console.log(Math.PI);           //3.141592653589793
console.log(Math.ceil(3.6));    //4
console.log(Math.floor(3.6));   //3
console.log(Math.round(3.6));    //4
console.log(Math.max(20,-10,2.5,60)); //60
console.log(Math.min(20,-10,2.5,60));  //-10

const arr = [20,-10,2.5,60];
console.log(Math.max(...arr));  //60

//random() returns a decimal value between 0 and 1
console.log(Math.random());

/**
 * Write a JS function hat returns a random number
 * between 1 to 6 inclusive thus simulating ludo dice.
 */

function dice() {
    let rand = Math.random();
    rand = rand * 6;
    rand = Math.ceil(rand);
    return rand;
}
console.log(dice());
console.log(dice());
console.log(dice());
console.log(dice());

//abs() absolute function ignores the sign and just returns the number

console.log(Math.abs(-9));  //9

//exp() exponent function works like math exponent 

console.log(Math.exp(10));  //22026.465794806718

//pow() Power function helps us do a^b
console.log(Math.pow(2,3));  //8

//sqrt() returns the square root of a number
console.log(Math.sqrt(4)); //2



