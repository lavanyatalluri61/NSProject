//Date 

//UTC Time format
const date = new Date();
console.log(date);

//Milliseconds elapsed

const Milliseconds = Date.now();
console.log(Milliseconds);

//Get the time 27 hrs 30 mins from now
const ms_to_add = (27 * 60 + 30) * 60 * 1000;
const final_time = Date.now() + ms_to_add;
console.log(final_time);
console.log(new Date(final_time));

/**
 * write a function to find the date 40 months after your DOB.
 * 
 * 
 */

console.log("DOB...")
function get_40_months_after_dob(date_of_birth) {
    const dob = new Date(date_of_birth);
    const dod_ms = dob.getTime();
    //40 months = 3 years 4 months = 365 * 3 days + 4 * 30 + 2 = 1217 days
    //1217 days = 1217 * 24 * 60 hrs * 60 * 1000
    const msToAdd = (1217 * 24 * 60 * 60 * 1000);
    const final_time1 = dod_ms + msToAdd;
    return new Date(final_time1);
    //console.log(final_time1);
    //console.log(new Date(final_time1))
}
console.log(get_40_months_after_dob('1998-05-18')); //2001-09-16T00:00:00.000Z 


/**  code given by sirrr
 * function get_40_months_after_dob(date_of_birth) {
    const dob = new Date(date_of_birth);

    const dob_ms = dob.getTime();

    const ms_to_add = 40 * 30.5 * 24 * 60 * 60 * 1000;


    const result_in_ms = dob_ms + ms_to_add;

    return new Date(result_in_ms);

}


console.log(get_40_months_after_dob('1993-03-23')); //1996-07-25T00:00:00.000Z

 */

const date1 = Date("2022-08-11");
const date2 = new Date("2022-08-11");
console.log(date1);
console.log(date2);

console.log(date1 instanceof Date); //false
console.log(date2 instanceof Date); //true

console.log(date2.getTimezoneOffset()); //-330 i.e; 5 hrs 30 mins = 330 mins






