//strings

tr = 'hello'

str.indexof('enter string here')  
// to find first occurence

str.slice(-1,7)         //can take negative values
str.substring(1,7)      //cant take negative values
str.substr(1,7)
//initiation index, and the length we want to go until

str.replace('old string', 'new string')     //str will NOT change. only changes the value of the variable it is stored in

str.toUpperCase()
str.toLowerCase()

str.concat('New String')

str.trim()          //removes leading and ending whitespace in a string

str.charAt()        //returns character at index specified
str.charCodeAt()    //Not every important

// objects

// variables other than primitive are called objects
// objects are key value pairs

// arrays 
let name1 = [1,3,5,6,7];
//same way to create array
new Array(1,2,3,4,5);  // also new creates an object

name1.sort()

name1.push('adds an element at the end of an array')

name1.length()

// ALERTS PROMPTS AND CONIRMS

// alert in in-browser
alert('this is an alert') // does not return any value

let name2 = prompt('What is your name',"guest"); //give only "ok" choice
                                        //default
confirm("Do you really want to delete this post?");


setTimeout(() => {

}, time in millisex) //Allows us to run the function ONLY once after an interval of time

setTimeout("function name, time in millisex, output here")
setTimeout("function(), time in millisex") //is wrong since you cannot declare a function inside of settimeout

//store the above correct statement  inside a variable and console.log it and you will get unique id of the element

//put that into cleartimeout and settimeout will stop running

clearTimeout()  //Allows us to run the function repeatedley after an interval of time

setInterval('function name ,time in millisex, "ANY OUTPUT"')
//id wali cheez yaha bhi apply hoti hai


//ARROW FUNCTIONS

function greet(){       //normal,regular function
    console.log("Hello world");
}

greet = ()=>{
    console.log("Hello from an arrow");     //arrow function
}

sum = (a,b) => a + b; //even better

//math object
//basically like import math from python or #include <math.h> from C and C++

let m = Math;
console.log("Math") //returns an object of math functions to use in javascript
Math.E//~The function to be executed~
Math.pow(2,3);
Math.sin(Math.PI);     //angle measured in radians
Math.min();
Math.max();

 //then the best thing comes...
let r = Math.random()  //between 0 and 1
console.log(r);
//IMP ::: random number between a and b = a + (b-a)*Math.random() 


// JSON

//JSON is a lightweigh format used for storing and transporting data. It is often used to when data is sent from a serverto a webpage. It is displayed in a key value pair  format.

//can be used independently from Javascript and many programming languages hold the ability to parse and generate JSON

let jsobject = {            //regular JS object
    name_ : "gunhawke",
    channel : "binaryWorm",
    friend : "Rohan Das",
    food : "Bhindi"
}

let JSONstr = JSON.stringify    //converts a javascript value to JSON string
                                //then we can use all the string functions we learnt earlier

JSONstr.replace() //replaces text in a string. string goes inside the bracket is replaced

JSON.parse()        //converts JSON string to a javascript object 

