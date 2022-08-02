// const arr = [1, 2, 3];
// console.log("Length of an array: " + arr.length)
// //accessing array items
// console.log("First element of an array: " + arr[0]);
// arr[1] = "hi";
// console.log(arr);

//Assignment1
//create an array and store table of 5
function table_of_5() {
    const arr = [];
    for(let i = 0; i < 10; i++) {
    arr[i] = 5*(i + 1);
    }
    console.log(arr);
    console.log("Length: " + arr.length);
}
table_of_5();

//We want to create an empty array of n size, we can use contructor
const arr2 = new Array(10);
console.log("arr2 length: " + arr2.length);
console.log(arr2);

//create an array of size n  with some value
const arr3 = new Array(10).fill(1);
console.log("arr3 length: " + arr3.length);
console.log(arr3);

//determining the array types in JS

if(Array.isArray(arr3)) {
    console.log('arr3 is an Array');
} else {
    console.log('arr3 is not an Array');
}

//unshift(enter elements) and shift(takes elements) takes from start of an array
//push and pop takes from end of an array

//write a function in JS to store the chess pieces of a chess board
//black king = BK, black queen = BQ, black knight = BN(ghoda), black rook = BR(haathi), black bishop = BB(oot), black pawn = BP(sipahi)
//white king = BK, white queen = BQ, white knight = BN(ghoda), black rook = BR(haathi), white bishop = BB(oot), white pawn = BP(sipahi)
//given a chess board is 2d array of size 8x8
//const board = [
//   A[1,2,3,4,5,6,7,8],
//   B[1,2,3,4,5,6,7,8],
//
//]

/* const board = [
    ['BR', 'BN', 'BB', 'BQ', 'BK', 'BB', 'BN', 'BR'],
    ['BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP'],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ',],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ',],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ',],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ',],
    ['WR', 'WN', 'WB', 'WQ', 'WK', 'WB', 'WN', 'WR'],
    ['WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP','WP']
]
for(let row = 0;row < 8; row++) {
    let row_str = '';
    for(let piece = 0; piece < 8; piece++) {
        row_str += board[row][piece] + '\t';

    }
    console.log(row_str);
} */

/* console.log("why const not let for array")
//why_const and not let in array

let arr = [1,2,3]
//while working with array we won't redeclare it.

//arr = ['a','b'] //illegal
console.log(arr);
//usually we just declare an array once and work with the items inisde
//and its best do able via const
arr[1] = 'a';
console.log(arr); */





