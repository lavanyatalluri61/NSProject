const ages = [17, 24, 28, 78];
//we have to findout are there any senior citizen inside ages array
const is_any_sc = ages.some((item, index, arr) => {
    return item > 60;
})
console.log(is_any_sc);

const is_every_sc = ages.every((item, index, arr) => {
    return item > 60;
})
console.log(is_every_sc);

const arr = [1,3,5,7,8];
//to find the all items are odd inside the array
console.log("all items in odd")
const is_every_odd = arr.every((item, index,arr) => {
    if(item % 2 === 0) {
        return false;
    }
    //return item % 2 !== 0;
})
console.log(is_every_odd);

const arra = ['a', 'b', 'c', 'd', 'e'];
arra.forEach((item, index, arra) => {
    console.log(index + '. ' + item + " arra: " + arra);
})

//write a program to iterate over the items of the fibonacci series and make sure its correct using forEach loop
console.log("Fibonacci Series");
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21];

let is_valid_fib = true;
fibonacci.forEach((item, index, arr) => {
    if(index >= 2 && (item !== (arr[index-1] + arr[index-2]))) {
        is_valid_fib = false;
        return;
    }
})
console.log(is_valid_fib);


