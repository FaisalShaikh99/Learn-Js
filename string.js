
// String Length:

// let x = "Faisal SHaikh"
// let y = x.length
// console.log(y);

// String charAt():
// The charAt() method returns the character at a specified index (position) in a string:

// let x = "Faisal SHaikh"
// console.log(x.charAt(4));

// String charCodeAt():
// The charCodeAt() method returns the code of the character at a specified index in a string:

// let x = "Faisal SHaikh"
// console.log(x.charCodeAt(6));

// String at():Now you can use myString.at(-2) instead of charAt(myString.length-2)

// let x = "Faisal SHaikh"
// console.log(x.at(5));

// Property Access [ ]:

// let x = "Faisal SHaikh"
// console.log(x["5"]);


// String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).

// let x = "Faisal SHaikh"
// console.log(x.slice(0,6));
// console.log(x.slice(-8,-1));

// String substring()

// let x = "faisal Shaikh"
// console.log(x.substring(0,6));


// String substr()

// let x = "faisal,bilal,noman"
// console.log(x.substr(6));
// console.log(x.substr(-6));


// String toUpperCase()
// String toLowerCase()

// const name = "Faisal Shaikh"
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());


// String concat():

// const name1 = "Faisal"
// const name2 = "Shaikh"
// console.log( name1.concat( "",name2));

// String trimStart(): ECMAScript 2019 added the String method trimStart() to JavaScript.
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

// trimStart()    => who does remove start space

// let name = "    Faisal Shaikh"
// console.log(name.trimStart());


// String trimEnd(): ECMAScript 2019 added the string method trimEnd() to JavaScript.
// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

// trimEnd()    => who does remove End space

// let name = "    Faisal Shaikh      "
// console.log(name.trimStart());


// String padStart():
// string is add in start from keeped string 

// let name = " Shaikh";
// console.log(name.padStart(13, "Faisal"));     //or


// let name = "7";
// console.log(name.padStart(4, "0")); 



// String padEnd():
// string is add in after from keeped string 

// let name = "5";
// console.log(name.padEnd(7, 0));



// String repeat():

// const sentence  = "Hello JAVASCRIPT"
// console.log(sentence.repeat(2));


// String replace(): ye kisi bhi sentence ko change kar sakta hai

// ex:1

// function myFunction() {
//     let text = document.getElementById("demo").innerHTML;
//     document.getElementById("demo").innerHTML =
//     text.replace("Microsoft","W3Schools");
// }

// ex:2

// function mySentence() {
//     let sentence = document.getElementById("name").innerHTML; document.getElementById("name").innerHTML =
//     sentence.replace("What is your name","My name is Faisal Shaikh");
// }


// => By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

// => To replace case insensitive, use a regular expression with an /i flag (insensitive):

// function mySentence() {
//         let sentence = document.getElementById("name").innerHTML; document.getElementById("name").innerHTML =
//         sentence.replace(/What is your name/i,"My name is Faisal Shaikh");
//     }



// => To replace all matches, use a regular expression with a /g flag (global match):

// function mySentence() {
//             let sentence = document.getElementById("name").innerHTML; document.getElementById("name").innerHTML =
//             sentence.replace(/best/g,"Usless");
//         }
    


// String ReplaceAll() 
// function pets(){
// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");
// document.getElementById("demo").innerHTML = text;
// }



// String split() 

// let x = ("a,b,c,d")
// const y = x.split(",");
// console.log = y[3];









 /////////******************String Search Methods */

//  String indexOf(): This is tell to us that any word of first character of number

// let text = "Please locate where 'locate' occurs!";
//  console.log( text.indexOf("where"));
 
//  String lastindexOf(): This is tell to us that any word of first character of number

// let text = "Please locate where 'locate' occurs!";
//  console.log( text.lastIndexOf("where"));
 


// String search():

// const name = "What is your name?"
// console.log(name.indexOf("your"));
// console.log(name.search("your"));
// console.log(name.search(/your/));


// String match():

// let text = "The rain in SPAIN stays mainly in the plain";

// console.log(text.match("ain"));         //or
// console.log(text.match(/ain/));
// console.log(text.match(/ain/g));
// console.log(text.match(/ain/gi));


// String matchAll():

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// console.log(text.matchAll("Cats"));
// console.log(text.matchAll(/Cats/g));
// console.log(text.matchAll(/Cats/gi));


// String includes(): The includes() method returns true if a string contains a specified value.
// Otherwise it returns false.

// let text = "Hello world, welcome to the universe.";
// console.log(text.includes("world"));
// console.log(text.includes("world",45));
// console.log(text.includes("faisal"));


// String startsWith():The startsWith() method returns true if a string begins with a specified value.

// let text = "Hello world, welcome to the universe.";
// console.log(text.startsWith("Hello"));
// console.log(text.startsWith("world"));


// String startsWith():The endsWith() method returns true if a string begins with a specified value.

// let text = "Hello world, welcome to the universe.";
// console.log(text.endsWith("universe."));
// console.log(text.endsWith("world"));






//*********************** Template Strings/************** */ */

// String Templates
// Template Strings
// Template Literals


// Back-Tics Syntax:

// let x = `My name is Faisal shaikh`

// Quotes Inside Strings:

// let text = `He's often called "Johnny"`;

// Multiline Strings:

// let text =
// `The quick
// brown fox
// jumps over
// the lazy dog`;

// Interpolation:  ${...}

// let firstname = "Faisal"
// let Lastname = "Shaikh"

// console.log(`My name is ${firstname} ${Lastname}`);


// Expression Substitution:

// let price = 10;
// let VAT = 0.25;

// let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
// console.log(total);


// let x  = 50;
// let y =  40;

// let total = (`Total : ${(x+y) * (x-y) * (x/y)}`)
// console.log(total);


// ++++++++ HTML Templates:+++++++++++

// let Car = "Property of car"
// let Property = "Name: Brezza, Color: White, Weight: 900kg"

// let heading = `<h1>${Car}</h2>  `

// for(const x of Property) {
//     heading += `${x}`
// }

// document.getElementById("demo").innerHTML = heading



