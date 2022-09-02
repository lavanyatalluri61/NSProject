const obj = {
    name: 'ram',
    age: 28
};

// const click_counter = {
//     clicks: 10,
//     get clicks() {
//         return this._clicks;
//     }
// };

// console.log(click_counter.clicks);
// click_counter.clicks = 0;
// console.log(click_counter.clicks);

//Improved version of above code
//It looks like a function but behaves like a property
const click_counter = {
    _clicks: 10,
    get clicks() {
        return this._clicks;
    }, 
    set clicks(value) {
        if(value < this._clicks) 
            return;
        else 
            this._clicks = value;
        console.log("Updated the click count");
    }
};

console.log(click_counter.clicks);
click_counter.clicks = 11;
console.log(click_counter.clicks);

/**
 *  We have an object Employees
 * 
 * 
 */
const Company = {
    name: 'SpaceX',
    _employees: [
        {
            id: 1,
            name: 'Harry',
            dept: 'metal fabrication'
        },
        {
            id: 2,
            name: 'Neha',
            dept: 'Public Relations'
        }
    ],

    get employees() {
        let result = '';
        this._employees.forEach((emp, index) => {
            result +=  `${index + 1}. ID: ${emp.id}, Name: ${emp.name}, Dept: ${emp.dept}\n`;
        })
        return result;     
    },

    set employees(value) {
        this._employees.push({
            id: this._employees.length + 1,
            // name: value.name,
            // dept: value.dept
            ...value
        })

    }
}
console.log(Company.employees);

Company.employees = {
    name: 'Mika',
    dept: 'Operations'
}
console.log(Company.employees);
//1. ID: 1, Name: Harry, Dept: Metal Fabrication
//2. ID: 2, Name: Neha, Dept: Public Relations
