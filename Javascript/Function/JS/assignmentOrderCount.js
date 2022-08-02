let counter = 0;
// let generateOrder = function(starting) {

// }
const order = () => {
    console.log('Total Order = '+ ++counter);
}
// const order = generateOrder();
order(); // Total orders = 1
order(); // Total orders = 2
order(); // Total orders = 3

//Problem is other codes can also access and changes the counter value which is not acceptable
function some_other_code() {
    counter = 0;
}
some_other_code();
order();
// console.log()
// let count = 0;
// function unknown() {
//     // let c = count;
//     // let k = c;
//     console.log(++count);
// }
// unknown()
// unknown()

