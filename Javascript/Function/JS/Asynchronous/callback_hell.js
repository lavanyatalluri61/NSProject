/**
 * Let's assume all these func1, func2 and func3 are time taking functions..
 * And we have a requirement to execute them in order
 * 
 * func1() -> func2() -> func3()
 */
function func1(num, cb) {
    cb(num * 2);
}

function func2(num, cb) {
    cb(num * 3);
}

function func3(num, cb) {
    cb(num * 4);
}

func1(10, function(result1) {
    console.log("func1 results is " + result1);

    func2(result1, function(result2) {
        console.log("func2 result is " + result2);

        func3(result2, function(result3) {
            console.log("func3 result is " + result3);
        })
    })
})










