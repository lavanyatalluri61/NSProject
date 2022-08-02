//lets create a function and perform multiple operations
const calculator = (num1, num2, op) => {
    switch (op) {
        case 'add':
            return num1 + num2;
        case 'sub':
            return num1 - num2;
        case 'mul':
            return num1 * num2; 
        case 'div':
            return num1 / num2;  
        default:
            return num1 + num2;
    }
}
console.log(calculator(3, 4, 'add'));