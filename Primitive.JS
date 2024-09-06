//*************String


// let x = "Faisal";       //or
// let y = 'shaikh';     

// let abc = "ABCDFGHIJKLMNOPQRTUVWXYZ";
// console.log(abc.length);

// let myname= "My name is \"Faisal\" shaikh"
// console.log(myname);


// let text= 'It\'s alright.';
// console.log(text);


// Strings as Objects++++++++

// let x = "Faisal "
// console.log(typeof x);

// let y = new String("Faisal")          
// console.log(typeof y);       =>as Objects



// let a = "Faisal"     //this is a String
// let b = new String("Faisal")      //this is a Object
// // console.log ( a = b);
// console.log( a == b);       //output : true   
// console.log( a === b);    //output : False 
   
// // Beacause triple equal is see its type

// console.log(typeof a == b);
// console.log(typeof a === b);


// String Methods+++++++++++

// String Length:
// let x = "FAISAL SHAIKH"
// console.log(x.length);


// String charAt():
// let x = "FAISAL SHAIKH"
// console.log(x.charAt(-5));


// String charCodeAt():
// let x = "FAISAL SHAIKH"
// console.log(x.charCodeAt(0));


// Nots for at:
// The at() method returns the character at a specified index (position) in a string.

// The at() method is supported in all modern browsers since March 2022:

// Note
// The at() method is a new addition to JavaScript.

// It allows the use of negative indexes while charAt() do not.

// Now you can use myString.at(-2) instead of charAt(myString.length-2).


// String at():
// let myString = "Faisal";     
// console.log(myString.at(0));



// Property Access [ ]

// let x = "hello world"
// console.log(x[6]);


// String slice()

// const fruits = "Banana, Apple, Mango"
// console.log(fruits.slice(8,13));   // 9 to 13 words
// console.log(fruits.slice(5,16));   // 5 to 16 words
// console.log(fruits.slice(5));    // All after 5 words
// console.log(fruits.slice(-6));      // (-) Start to from last series like -1,-2,-3,-4.......
// console.log(fruits.slice(-6,-11));  No answer
// console.log(fruits.slice(-11,-6));  //-11 to from -7


// String substring():

// const Fruits = "Banana, Apple, Mango"
// console.log(Fruits.substring(8,15));     //same to slice

// String substr()

// const name = "Faisal, Bilal, Noman"      // here: first number first character to start,and second number start from last character
// console.log(name.substr(7,6));          //output:" Bilal"
// console.log(name.substr(7));                 // after all character of 7
// console.log(name.substr(-7));        // last -1 to -7 



// Converting to Upper and Lower Case


// let x ="Faisal Shaikh"
// console.log(x.toUpperCase());
// console.log(x.toLowerCase());

// String concat():  The concat() method can be used instead of the plus operator. These two lines do the same:

// let x = "Hello";
// let y = "Faisal";
// let z = "Shaikh"
// console.log(x,y.concat("","",z));



// String trim():   The trim() method removes whitespace from both sides of a string:

// let name = " Faisal Shailkh      "
// console.log( name.trim());


// String trimStart():  ECMAScript 2019 added the String method trimStart() to JavaScript.

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

// Example
