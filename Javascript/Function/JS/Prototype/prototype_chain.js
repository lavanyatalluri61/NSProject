const arr= [1, 2, 3, 4, 5];

//This property length is coming from Array class
console.log(arr.length); //5

//toString() is coming from Array class
console.log(arr.toString());  //1,2,3,4,5

//valueOf() is coming from Object class
console.log(arr.valueOf(Object));  //[ 1, 2, 3, 4, 5 ]

//Assignment6
/**
 * create a Car class with the following
 *  Properties
 *  -wheels
 *  -steering
 * 
 * create maruti and honda classes that derive from car class
 * thus reusing it's wheels and steering properties
 * 
 * 
 * honda
 *  Properties
 *        -enginee: i-vtec
 * 
 * maruti
 *  Properties
 *      -service: "low cost service"
 */

console.log("Inheritance...")
function Car() {
    this.wheels = 4;
    this.steering = 'right';
}

const c1 = new Car();
console.log(c1);

function Honda() {
    //Calling the Parent Constructor
    Car.call(this);
    this.engine = "i-vtec";
    //__proto__ : Car;
}

Honda.prototype = Object.create(Car.prototype);
const h1 = new Honda();
console.log(h1);

function Maruti() {
    //Calling the Parent Constructor
    Car.call(this);
    this.service = "Low Cost Service";
}

Maruti.prototype = Object.create(Car.prototype);
const m1 = new Maruti();
console.log(m1);