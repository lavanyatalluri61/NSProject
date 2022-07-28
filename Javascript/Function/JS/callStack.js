function func1() {
    console.log("Called func1");
    func2();
}

function func2() {
    console.log("Called func2");
    func3();
}

function func3() {
    console.log("Called func3");
    //will get error because let doesn't support hoisting
    // console.log(a);
    // let a = 10;
}
func1();

//callstack is the order of function calls

//callstack for this code
// func3()
// func2()
// func1()