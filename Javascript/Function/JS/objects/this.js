/** this: always points to the object in current lexical scope
* therefore its a convienent way to access the current object
* we are working with without worrying about its name or reference.
*/
const obj = {
    name: 'john',
    print: function() {
        console.log(this);  // this is pointing to obj class
    }
};
console.log(obj);  //{ name: 'john', print: [Function: print] }
obj.print();  //{ name: 'john', print: [Function: print] }

console.log(this); //this is pointing to global window object

//this.console.log("Hello");  //Hello but needs to run in browser

//window.console.log("Hello");  //Hello but needs to run in browser

console.log("Hello"); //Hello

//Assignment1
/**
 * create a constructor function (i.e; class) ball 
 * with following proprties
 * 
 * id
 * color
 * diameter
 * then use this contructor function to create 100 ball objects
 * with id ranging from 1 to 100.
 * 
 */

console.log("Ball....")
function Ball(id, color, diameter) {
    this.id = id;
    this.color = color;
    this.diameter = diameter;
}
const balls = [];
for( let i = 0; i < 100; i++){
    //let ball1 = {};
    //ball1 = new Ball(i+1, 'red', '1m');
    //console.log(ball1);
    let newBall = new Ball(i+1, 'white', 5);
    balls.push(newBall);
}
console.log(balls);

//Assignment1
/**
 * Use a recursive function to add 10 numbers
 * 
 * 2 rules of a recursive function 
 * 
 * 1. Recursive function is a function that call itself
 * 2. Exit condition to break crecursion
 */

console.log("Recursion sum...")
const nums = [1,2,3,4,5,6,7,8,9,10];
function add(count, sum) {
    console.log(`count: ${count}, sum: ${sum}`);
    if(count > 10) {
        return sum;
    }
    return add(count + 1, nums[count -1] + sum);
}
console.log(add(1,0));

// another method
console.log("Another method to perform recursion..")
function recursion (num){
    if(num<=1){
    return num;}
    return num + recursion (num-1)
    }
console.log(recursion(10));
    



