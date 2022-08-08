let arrEven = [];
let arrOdd = [];
function sortEvenOdd(arr, arrSize)
  {
      // Your code here  
    for( let i = 0; i <= arrSize; i++) {
        if(arr[i] % 2 === 0) {
            arrEven.push(arr[i]);
        }
        else {
            arrOdd.push[arr[i]];
        } 
      }        
  }
  sortEvenOdd([1, 2, 3, 5, 4, 7, 10], 7);
  console.log(arrEven);
  console.log(arrOdd);