const arr = [1,2,3];
console.log(arr instanceof Array);

Array.prototype.something = 100;

function get_last_item() {

}

const arr2 = [];
const arr3 = new Array(10);
console.log("arr:" + arr.something);    //100
console.log("arr2:" + arr2.something);  //100
console.log("arr3:" + arr3.something);  //100
console.log(Array.prototype); //if we run in windows: F12 and run the command in console all properties of prototype will be displayed

//Assignment5
/**
 * create a class Employee with following properties
 * 
 * - name
 * - dept
 * 
 * Method
 * - print_info //should print console employees name and dept
 * 
 * test the Employee print_info() method by creating 3 employees and testing their print_info method
 */

function Employee(name, dept) {
    this.name = name;
    this. dept = dept;
}

function print_info(name, dept) {
    console.log("name: " + name + " dept: " + dept);
}

const obj1 = new Employee();
print_info("Lavanya", "IT");
print_info("Bindu", "Sales");
print_info("Mahesh", "Digital Marketing");

console.log("Using prototype property..")
function Employee1(name1, dept1) {
    this.name1 = name1;
    this. dept1 = dept1;
}

Employee1.prototype.print_infor = function() {
    console.log(`Employee Name: ${this.name1} and Department: ${this.dept1}`);
}

const e1 = new Employee1("Lavanya", "Marketing");
const e2 = new Employee1("Divya", "IT");
const e3 = new Employee1("Bindu", "Sales");

e1.print_infor();
e2.print_infor();
e3.print_infor();

const arrr = [1, 2, 3, 4, 5];
Array.prototype.length = 10;
console.log(arrr.length);  //5














