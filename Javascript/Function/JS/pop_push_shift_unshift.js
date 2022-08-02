const arr = [1, 2, 3, 4, 5];
console.log(arr);
const last_item = arr.pop();
console.log("After pop(): " + last_item + " is removed!");
console.log(arr);

arr.push(6);
console.log("After pushing 6:");
console.log(arr);

const first_item = arr.shift();
console.log("After shift(): " + first_item + " is removed!");
console.log(arr);

arr.unshift(0);
console.log("After unshifting 0:");
console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
//Now we want to remove 3 from arr1
const mid_arr1 = arr1.splice(2, 1); //2 is position of 3, 1 is delete count.
console.log("After slice(): " + mid_arr1 + " is removed.")
console.log(arr1);

//now remove and replace
const repl_arr1 = arr1.splice(2, 1, 'four');
console.log("After splice(): " + repl_arr1 + "with 'four' is replaced.")
console.log(arr1);

//filter functions
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
const even = arr2.filter((item, index, arr2) =>{
    return item % 2 === 0;
})
console.log("Even numbers in arr2: ")
console.log(even);

/*
Write a function to extract all the even numbers in an array

*/

/* console.log("Even Numbers in arr3:")
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
function even_no() {
    let even = [];
    for(i = 0; i <= arr3.length-1; i++) {
        if(arr3[i] % 2 === 0) {
            even.push(arr3[i]);
        }
    }
    return even;
}

console.log(even_no());
*/
console.log("Even Numbers in arr4:")
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8];
const en = arr4.filter((items => items % 2 === 0))
console.log(en);













