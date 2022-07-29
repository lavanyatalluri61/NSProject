let is_night = true;
is_night = false;
console.log(is_night);
console.log(typeof is_night);

function mul_10(num) {
    if(typeof num === 'undefined') {
        console.log("Please provide number argument to mul_10 function");
        return;
    }
    return num * 10;
}
console.log(mul_10(5));
console.log(mul_10());
console.log(mul_10('Lavs')); // NaN

function add(num) {
    if(typeof num === 'undefined') {
        console.log("Please provide number argument to add function");
        return;
    }
    return num + 10;
}
console.log(add(5));
console.log(add());
console.log(add('Lavs')); //works as concatenation operation and gives o/p as Lavs10

//Null: Its a type used by JS programmers to return empty values
//it is always allocated manually by us.
let s;
s = null;
console.log(typeof s); //object
console.log(s); //null

//Detecting the undefined Type
let k;
console.log(typeof k === 'undefined');
console.log(typeof s === 'undefined');

function sum(n1, n2) {
    const sum = n1 + n2;
    return;
    return sum;
    console.log("After return stamt nothing will be executed inside function..");
}
const result = sum(5, 10);
console.log(result);
console.log(" ")
const is_nt = true;
console.log(is_nt);

const is_day = Boolean(false);
console.log(is_day);

//Detecting boolean type
console.log(typeof is_nt === 'boolean');
console.log(typeof is_day === 'boolean');

function find_even_odd(num) {
    const is_even = num % 2 === 0;
    if(is_even) {
        console.log(num + " is an even number");
    }
    else {
        console.log(num + " is an odd number");
    }
}

find_even_odd(5);
find_even_odd(10);

// Number type

//ways to create number type
const num1 = 45;
console.log(num1); //45
const num2 = NaN;
console.log(num2); //NaN
const num3 = Infinity;
console.log(num3); //Infinity
const num4 = Number(45);
console.log(num4); //45
const num5 = parseInt('75'); 
console.log(num5); //75
const num6 = 8.876782367;
console.log(num6); //8.876782367

//Detecting a number type
console.log(typeof num1 === 'number');

//to test for invalid numbers i.e; NaN
console.log(Number.isNaN(num2));

//usecases of number type
for(let i=0;i<10;i++) {
    console.log(i + ". Hey Hi");
}

//string type

//ways to create a string
let str1 = "Hello World!";
console.log(str1);

let str2 = 'Hello World!';
console.log(str2);

let str3 = `Hello World!`;
console.log(str3);

let str4 = String("Hello World!");
console.log(str4);

const num = 4567;
let str5 = num.toString();
console.log(str5);
console.log(typeof str5);

let str6 = "Hello " + "World";
console.log(str6);

//detect a string type
console.log(typeof str1 === 'string'); //true

//usecases
function salutation(name) {
    const salute = `Hello ${name}! How are you doing?`;
    console.log(salute);
}
salutation('Lavs');

//Bigint type

let a = 23;
let b = Number.MAX_SAFE_INTEGER;
console.log(b); //9007199254740991
console.log(b + 2); //9007199254740992 (1 less than expected)

// how to create bigint types
let safe_b = 9007199254740991n;
console.log(safe_b);
console.log(safe_b + 2n);

// let bignint_num = BigInt(689616895663189746489713);
// // Typeof operator
// console.log(typeof safe_b === 'bigint') //true

//usecases
//any situations where the number size is bigger than the number MAX_SAFE_INTEGER

let huge_amount = 764183560736761061367n

let amount_after_interest = huge_amount + (huge_amount * 12n * 10n) / 100n;
console.log(amount_after_interest);

//Symbol Type
const sym1 = Symbol();
console.log(sym1);

const sym2 = Symbol('randomString');
console.log(sym2);

console.log(typeof sym1 === 'symbol');

const obj = {
    sym1: "some value"
}




