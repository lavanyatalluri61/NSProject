/**
 * After the OOPS class the instructor is a requesting you to design a for teacher with the following schema.
 * 
 * class : Teacher
 *  Properties
 *      -name
 *      -age
 *   methods
 *      -print(): prints the name and age info
 * 
 * class Instructor(extends Teacher)
 *  properties
 *      -batch_name
 * 
 * class Mentor(extends Teacher)
 *  properties
 *      -days(eg: 2 if intructor available 2 days in a week)
 *  methods
 *      -is_available(): prints mentor is available today
 * 
 * 
 */

class Teacher {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`Name: ${this.name} and Age ${this.age}`);
    }
}
class Instructor extends Teacher {
    constructor(name, age, batch_name) {
        super(name, age);
        this.batch_name = batch_name;
    }

}
class Mentor extends Teacher {
    constructor(name, age) {
        super(name, age);
        this._days = 0;
    }
    get days() {
        return this._days;
    }
    set days(value) {
        if(value >= 0 && value <= 7) {
            this._days = value;
        }
        else {
            console.log("Invalid input for Mentor days!!");
        }
    }
    is_available() {
        console.log("Mentor is available today");
    }
}
const t1 = new Teacher("Drona", 56);
console.log(t1);
t1.print();

const i1 = new Instructor("Padma", 52, "Dreamers Batch");
console.log(i1);


const m1 = new Mentor("Krishna", 55);
m1.days = 2;
console.log(m1);
console.log(m1.days);
m1.is_available();