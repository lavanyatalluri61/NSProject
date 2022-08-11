// function print =   () => {
//     console.log("Hello World1");
// }
function print() {
    console.log("Hello World");
}
print();
print.call();

//Assignment

const obj = {
    name: "john doe",
    age: 34
};

const obj1 = Object.create(obj);

const obj2 = obj;

console.log("Before changing..");
console.log(obj);
console.log(obj1.age);
console.log(obj2);
/**
 * Output
 * 
 * Before changing..
{ name: 'john doe', age: 34 }
34
{ name: 'john doe', age: 34 }
 */

console.log("After changing..");
obj1.age = 40;
obj2.name = "Lavv"
console.log(obj);
console.log(obj1.age);
console.log(obj2);

/**
 * Output
 * 
 * After changing..
{ name: 'Lavv', age: 34 }
40
{ name: 'Lavv', age: 34 }
 */


