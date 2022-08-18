function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}

function pow(num1, num2) {
    return Math.pow(num1, num2);
}

//Arithematic API
const Arithematic = {
    add: function add(num1, num2) {
        return num1 + num2;
    },
    sub: function sub(num1, num2) {
        return num1 - num2;
    },
    pow: function pow(num1, num2) {
        return Math.pow(num1, num2);
    }
}

console.log(Arithematic.add(2, 5)); //7
console.log(Arithematic.sub(2, 5)); //-3
console.log(Arithematic.pow(2, 5)); //32



//Other Examples of API

//Math API - PI, sqrt(), pow(), sin()

