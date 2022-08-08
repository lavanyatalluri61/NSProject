/**
 * Map and Reduce are array utility functions where 
 * Map - helps in mapping out specific properties of an array
 * 
 * const arr = [];
 * arr.map((item, index, array) => {
 * return item.prop;
 * })
 * returns new array
 * 
 * Reduce - helps in accumulating results while iterating throgh an array in a single line syntax
 * 
 * const arr = [1,2,3,4,5];
 * arr.reduce((acc, item, index, array) => {
 * return acc + item.prop;
 * }, initialize_value)
 * returns sum;
 * 
 */

const Employees = [
    {
        name: "Avinash",
        Emp_id: 1,
        department: 'IT',
        salary: 550000
    },
    {
        name: "Preethi",
        Emp_id: 2,
        department: 'sales',
        salary: 650000
    },
    {
        name: "Vineet",
        Emp_id: 3,
        department: 'Customer success',
        salary: 450000
    }
]

/**
 * sometimes there are situations we are not interseted in all the object properties
 * we want to focus on specific properties
 * In those cases we can create an alternate version of that array using Array.map()
 */

//Let's say we want only department information from Employees array

const departments = Employees.map((item, index, arr) => {
    return item.department;
})
console.log(departments);   //[ 'IT', 'sales', 'Customer success' ]

////Let's say we want only id and department information from Employees array

const departments_and_ids = Employees.map((item, index, arr) => {
    return {
        Emp_id: item.Emp_id,
        department: item.department 
    }
})
console.log(departments_and_ids);   

/**
 * o/p:
 * 
 * [
  { Emp_id: 1, department: 'IT' },
  { Emp_id: 2, department: 'sales' },
  { Emp_id: 3, department: 'Customer success' }
]

 */

//This is nothing but
const depts = [];
for(let i = 0; i < Employees.length; i++) {
    depts.push(Employees[i].department);
}
console.log(depts); //[ 'IT', 'sales', 'Customer success' ]

//Reduce: is used to conveniently iterate over an array and get the final result
//Eg1: Using map( to add the numbers of an array)
const arr = [1,2,3,4,5,6,7,8,9,10];
const sum = arr.reduce((acc, item, index, arr) => {
    return acc + item;
}, 0);
console.log(sum); //55

const sum1 = arr.reduce((acc, item, index, arr) => acc + item, 0);
console.log(sum1); //55

//Eg2: Using reduce() to concatenate the strings.
const str = ['I', 'love', 'to', 'code'];

const sentence = str.reduce((acc, item, index, arr) => acc + ' ' + item, '');
console.log(sentence);

function map_inner_working() {
    let acc = '';
    for(let i = 0; i < str.length; i++) {
        acc += ' ' + str[i];
    }
    return acc;
}
console.log(map_inner_working());

//Assignment2

/**
 * Given an employee array. Use reduce method to calculate salary of all employees
 */
const sal_arr = Employees.map((item, index, arr) => {
    return item.salary;
})
console.log(sal_arr);
const sal_sum = Employees.reduce((acc, item, index, arr) => {
    return acc + item.salary;
}, 0)
console.log(sal_sum);

