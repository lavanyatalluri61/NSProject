//constructor function
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
















