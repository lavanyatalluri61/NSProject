/**
 *  Things to remeber about JSOn
 * 
 * 1. It has 2 functions
 *  a. JSON.parse()
 *  b. JSON.stringify()
 * 
 * 2. It doesn't support functions like a normal JS object
 * 
 * 3. Data types supported by JSON are 
 *      Array
        Objects
        String 
        Number 
        Boolean 
        Null
        
 */
const json = `
{
    "name": "john",
    "age": 24
}
`
//we can test this json data 
const json_obj = JSON.parse(json);
console.log(json_obj);  //{ name: 'john', age: 24 }
console.log(json_obj.age); //24

json_obj.address = {
    street: "24th avenue",
    "area": "bhandu",
    pin: 345003
}

//convert the object back to JSON

const new_json = JSON.stringify(json_obj, null, 2);
console.log(new_json);


//JSON doesn't support functions

const person = {
    name: "ajay",
    sex: 'male',
    print: function() {
        console.log("Hello, myself" + this.name);
    }
}
const person_json = JSON.stringify(person);
console.log(person_json);
