const promise = new Promise((resolve, reject) => {
    resolve("result");
    //reject("failed");
});
promise
    .then((res) => {
        console.log(res);
        res1.concat('2');
        return res + '1';
    })
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log("Catch Block");
        console.log(error.message);
    })
    .finally(() => {
        console.log("Finally Block");
    })


    
