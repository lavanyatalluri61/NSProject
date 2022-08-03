//for each
console.log("Using for loop:");
const arr = ['a', 'b', 'c', 'd', 'e'];
for(let i = 0; i<arr.length;i++) {
    console.log(i + ". " + arr[i]);
}
console.log("Using forEach loop:");
arr.forEach((item, index, arr) => {
    console.log(index + ". " + item);
})

//sum:
/* function table_of_5() {
    const table = [];
    for(let i = 0; i< 10; i++) {
        table[i] = (i+1)*5;
        
    }
}
*/

/* Write a program to create an array of size 200 with even no.s only
*/
console.log("sum of even numbers")
const arr1 = new Array(200);
for(let i = 0; i<400;i++) {
    arr1.push(i+1);
}
//console.log(arr1);
en = 0;
arr1.forEach((item, index, arr1) => {
    if(arr1[index] % 2 === 0) {
        en = en + arr1[index];
    }
})
console.log(en);