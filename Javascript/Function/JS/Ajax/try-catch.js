const num = 100;
console.log("Before Error");
try {
    num = 200;
} catch(error) {
    console.log("An error occured");
} finally {
    console.log("This will always be executed. Error is occured or not..")
}
console.log("After Error");
//console.log(num);

