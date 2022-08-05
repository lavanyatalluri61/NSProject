function Car(engine, model, year) {
    this.engine = engine;
    this.model = model;
    this.year = year;
}
/**function Car(e, m, y) {
    engine = e;
    model = m;
    year = y;
} */    //will get o/p: Car {} when intialized the object with new keyword
const car1 = {
    engine: "800cc",
    model: "Maruthi 800",
    year: 2006
}
const car2 = new Car("800cc", "Maruthi 800", 2006);
const car3 = {
    engine: "1.2L",
    model: "Honda Jazz",
    year: 2018
}

const car4 = new Car("12L", "Honda Jazz", 2018);
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);


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

















