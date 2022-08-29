/**
 * Write a JS code to handle divide by zero exception
 */

let num1 = 10, num2 = 0;
console.log(num1 / num2);

/**
 * Write a JS code to handle the property not found exception
 */

const obj = {
    name: "John",
    age: 29,
    address: {
        street: '26 Avenue',
        area: 'alminia'
    }
}
try {
    console.log(obj.adress.area);
} catch(error) {
    console.log("Error Occured: " + error.message);
}
console.log(obj.name);



