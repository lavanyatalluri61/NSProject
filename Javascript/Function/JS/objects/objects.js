const object = {};
//object is the actual representation of data
object.name = "Bindu";
object.age = 34;
object.is_married = true;

console.log(object);

const object2 = {
    name: "Tina",
    age: 22,
    is_married: false
};

console.log(object2);

const object3 = {
    "prop name with spaces": "some value",
    "(*(/(+(-)" : 23
}

console.log(object3);

/*
We have a table of students that needs to be converted
to a convienent data structures in JS using objects and arrays

roll no.    student_name      age        interest
1           rekha               23          Biology
2           vishal              21          Chemistry
3           Ritu                22          Geography
*/

const students = [
    {
    roll_no: 1, 
    name: "Rekha", 
    age: 23, 
    interest: "Biology"
    },

    {
    roll_no: 2, 
    name: "Vishal", 
    age: 21, 
    interest: "Chemistry"
    },

    {
    roll_no: 3, 
    name: "Ritu", 
    age: 22, 
    interest: "Geography"
    }
]

//console.log(students);

students.forEach((item,index,arr) => {
    console.log(`${item.name} is of age ${item.age} and their favourite subject is ${item.interest}`)
})

const stds = []
stds.push({
    name: "data",
    age: 22,
    subject: "Physics"
})

const sts = [];
function update_sts(name,age,roll_no, interest) {
    const st = {
        name: name,
        age: age,
        roll_no: roll_no,
        interest: interest
    }
    sts.push(st);
}
update_sts("Pooja", 22, 1, "Bio")
update_sts("Teja", 20, 2, "Maths")
update_sts("Sharu", 21, 3, "Hindi")

console.log(sts);

//Approach 3: Lets make students array private and introduce incrementing id concept
console.log("Using Closure Concept..")

const students1 = [];
function add_students_generator() {
    let current_roll_no = 0;
    return (name,age,roll_no, interest) => {
        const st = {
            name: name,
            age: age,
            roll_no: ++current_roll_no,
            interest: interest
        }
        students1.push(st);
    }
}
const add_student = add_students_generator();
add_student("Pooja", 22, "Bio")
add_student("Teja", 20, "Maths")
add_student("Sharu", 21,"Hindi")
console.log(students1);

//Objects inside objects
console.log("objects inside objects...")
const person = {
    name: "John",
    age: 23,
    address : {
        lane: "triplicane",
        city: "ahmedabad",
        pin: "380014"
    }
}
console.log(person);
console.log(person.age);
console.log(person.address.lane);

console.log("cars..")
const cars = [
    {brand: "Honda", make: "Jazz", year: 2018},
    {brand: "Maruthi", make: "Baleno", year: 2022},
    {brand: "Hyundai", make: "Seltos", year: 2020},
    {brand: "Tata", make: "Harrier", year: 2019}
 ]

 cars.forEach((item,index,arr) => {
    if(arr.item === "Tata") {
        console.log(cars.year);
     }
 })

 //Arrays inside objects
 console.log("Arrays inside objects...")
 const student2 = {
    name: "Rekha",
    age: 23,
    subjects: [
        {
            faculty: "Umesh",
            subject: "Bio"
        },
        {
            faculty: "siri",
            subject: "Che"
        },
        {
            faculty: "ravi",
            subject: "Phy"
        },
        {
            faculty: "teja",
            subject: "Music"
        },
        {
            faculty: "madhu",
            subject: "Phy Educ"
        }  
        
    ]
 }

console.log(student2.subjects[1]); //{ faculty: 'siri', subject: 'Che' }
console.log(student2.subjects[1].faculty); //siri
 
//function inside object
console.log("Function inside objects..")
const data = {
    nodes: 234,
    print: function() {
        console.log("the cuurent count of nodes is 234");
    }
}
data.print();

const obj = {
    name: "mahi",
    dept: {
        faculty: "Mr. Trivesh",
        name: "chemical engineering"
    }
}
console.log(obj.dept.name);   //chemical engineering
console.log(obj["dept"]["name"]);  //chemical engineering

const obj2 = {
    "some prop name": 245,
    "851876eryiqgieb feqeq": 61239
}
console.log(obj2["some prop name"]);

const obj3 = {
    data: [
        {
        name: "rahim", 
        age: 23, 
        address: {
            city: "jaisalmer"
        }
        },
        {
            name: "sugandh", 
            age: 22, 
            address: {
                city: "indore"
            }
        }
    ]
}
console.log(obj3.data[1]["address"]);   //{ city: 'indore' }
console.log(obj3.data[1]["address"].city);    //indore
console.log(obj3.data[1]["address"]["city"]);   //indore
console.log(obj3["data"][1]["address"]["city"]);  //indore

//Assignment1
/**
 * write a function to create an object which look like below
 * 
 * 
 * const obj = {
 * "1": 10,
 * "2": 20,
 * ..
 * 
 * "100": 100
 * }
 */
//Keys
console.log("assignment1..")
function object_creator() {
    let result = {};
    for(let i = 0; i <100; i++) {
       result[i] = i * 10; 
    }
    return result;
}
console.log(object_creator());

//values
const obje = {
    name: "john",
    age: 23,
    city: "agra"
}
console.log(Object.keys(obje)); //[ 'name', 'age', 'city' ]
console.log(Object.values(obje));  //[ 'john', 23, 'agra' ]
console.log(Object.entries(obje));  //[ [ 'name', 'john' ], [ 'age', 23 ], [ 'city', 'agra' ] ]
const is_city_prop = obje.hasOwnProperty('city');
console.log(is_city_prop);

//JS is very forgiving nature when it comes to undefined prop name
const some_obj = {
    age: 23
}
console.log(some_obj.someyhing_else); //undefined

















