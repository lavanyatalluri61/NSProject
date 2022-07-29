//synchronous
//cons
// console.log('Fetching some data in API')
// console.log('Fetching a file from server')
// console.log('Performing a time taking calculation')
// console.log('rendering some graphics in browser')

// function time_taking_function(fun) {
//     // console.log('Execute the function');
//     for(let i = 0; i < 10000000000; i++) {

//     }
//     // callback();
// }
// function do_something_else() {
//     console.log('Done Something Else');
// }

// time_taking_function();
// do_something_else();
// console.log("Final Task..")

function func(callback) {
    callback();
}

const print = () => {
    console.log("print Something");
}
func(print);

//callbacks are functions which are passed as an arguments to another function

