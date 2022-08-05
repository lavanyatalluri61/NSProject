/** this: always points to the object in current lexical scope
* therefore its a convienent way to access the current object
* we are working with without worrying about its name or reference.
*/
const obj = {
    name: 'john',
    print: function() {
        console.log(this);  // this is pointing to obj class
    }
};
console.log(obj);  //{ name: 'john', print: [Function: print] }
obj.print();  //{ name: 'john', print: [Function: print] }

console.log(this); //this is pointing to global window object

//this.console.log("Hello");  //Hello but needs to run in browser

//window.console.log("Hello");  //Hello but needs to run in browser

console.log("Hello"); //Hello



