console.log("Bought milk");

//Boiling milk should take 3 seconds

setTimeout(function() {
    console.log("Boiled milk");
}, 3000)


//Simple timer
let seconds = 0;
const interval_id = setInterval(() => {
   console.log(++seconds);

   if(seconds > 10) {
    clearInterval(interval_id);
   }
}, 1000)