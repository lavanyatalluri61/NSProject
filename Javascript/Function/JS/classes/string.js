//ways of creating the string

const str1 = "hello world";
const str2 = 'hello world';
const str3 = `hello world`;

//escape character in string
//Newline \n, tab \t
console.log("Hey Guys, \nHow are you doing..")
console.log("Name\tAge\tId\nNeha\t23\t123");

//String Interpolation is done by using backquotes
const name = "john";

const str4 = `${name} is a great programmer`;
console.log(str4);

const str5 = name +  'is a great programmer';
console.log(str5);



console.log("asdf".toUpperCase());  //ASDF
console.log("ASDF".toUpperCase());  //asdf
//concat() works just like + operator
const str7 = "hello";
const str8 = " world";

console.log(str7.concat(str8)); //hello world

//includes() : used to find the character or substring in a string
str9 = "john doe"
console.log(str9.includes("doe")) //true

//split(): is used to split the string itto a character array
const str10 = "Hey Guys";
const str10_arr = str10.split("");
console.log(str10_arr); 
/**[
    'H', 'e', 'y',
    ' ', 'G', 'u',
    'y', 's'
  ]
*/




/**
 * write a function in JS to return a random 
 * alphanumeric(a-z, A-Z, 0-9) password of size 10 characters
 */

console.log("Random Password..")
function password_generator() {
    const CHAR_SET = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z', '0', '1', '2', '3',
        '4', '5', '6', '7',
        '8', '9'
      ];
      const PASSWORD_CHAR_COUNT = 10;
    let random_password = '';
    for(let i = 0; i < PASSWORD_CHAR_COUNT; i++) {
        const rand_index = Math.floor(Math.random() * CHAR_SET.length);
        random_password += CHAR_SET[rand_index];
    }
    return random_password;

}
console.log(password_generator());
console.log(password_generator());
console.log(password_generator());

//Approach 2: Use ascii to generate random number








