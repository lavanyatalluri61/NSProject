console.log("Scopes in JS");

//Anything declared globally will be accessible everywhere
let global_var = "gv";

function func() {
    //This is a function scope
    let function_var = "fv";
    console.log("Inside a func(): ",function_var); //fv
    console.log("Inside a func(): ",global_var); //gv
    function nested_func() {
        console.log("Inside a nested_func(): ", function_var); //fv
    }
    nested_func()
    {
        //Anything other than functions having curly braces becomes a block scope
        console.log("Inside a block: ",global_var); //gv
        let block_var = "bv";
        var v_block_var = "vbv";
        console.log("Inside a block: ",block_var); //bv 
        console.log("Inside a block: ",v_block_var); //vbv 
    }
    console.log("Inside a func(): ",v_block_var); //bv 
    // console.log("Inside a func(): ",block_var); //will thrown an error 
}
func()
// console.log(function_var); // will throw error

// {
//     //Anything other than functions having curly braces becomes a block scope
//     console.log("Inside a block: ",global_var); //gv

// }