const obj = {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3"
}

Object.entries(obj) //[[]]

for(const key in obj) {
    console.log(`key: ${key}, value: ${obj[key]}`);
}

// key: prop1, value: value1
// key: prop2, value: value2   
// key: prop3, value: value3  

//in keyword in JS can be used to check if a property exist in an object

console.log('prop1' in obj) //true
console.log('prop2' in obj) //true
console.log('something' in obj) //false

