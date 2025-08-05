// This is a template literal example in JavaScript
//Template litrals are feature in javascript which allows for easier string creaion and interpolation.

//syntax:

const name = "Mihir";
const message = `Hello, ${name}! Welcome to the world of Js`
console.log(message);

//String Interpolation:

const a = 5
const b = 12
console.log(`Sum is: ${a + b}`);


//Multi-line Strings:
//Create a string that spans multiline without using \n character:

const multiline = `This is a string, 
and its spanning,
in multiple lines.`
console.log(multiline);

//expression evaluation:

const x = 10;
console.log(`double of x is: ${x * 2}`);


//Tagged Template litrals:

function tag(strings, value){
    return `$stings[0]`
}