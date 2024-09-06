// const x = 5; 
// console.log(x == 8);                     // false
// console.log(x == 5);                    // true
// console.log(x == "5");                 // true
// console.log(x === "5");               // false
// console.log(x === 5);                // true
// console.log(x != 8);                // true
// console.log(x !== 5);              //false 
// console.log(x !== "5");           //true
// console.log(x !== 8)             //true 
// console.log(x > 8)              //false 
// console.log(x < 8)             //true 
// console.log(x <= 8)           //true 
// console.log(x >= 8)          //false 




//Logical Operators******


// &&: and


// let x = 5;
// let y = 9;

// console.log(x > 2 && y < 10);
// console.log(x > 3 && y < 4);
// console.log(x > 7 && y < 12);
// console.log(x > 8 && y < 5);
// console.log(x > 8 && y < 5);
// console.log(x >= 2 && y <= 12);
// console.log(x >= 2 && y < 12);
// console.log(x > 2 && y <= 12);


// ||: or

// let x = 5;
// let y = 3;

// console.log(x==3 || y==5);
// console.log(x==5 || y==3);
// console.log(x==2 || y==3);
// console.log(x==5 || y==4);



// !:not

// let x = 5;
// let y = 3;

// console.log(!(x == y));
// console.log(!(x === y));
// console.log(!(x > y));
// console.log(!(x < y));



// Conditional (Ternary) Operator
// JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

// Syntax
// variablename = (condition) ? value1:value2

// function Ternary() {
//     let age  = document.getElementById("demo").value;
//     let abc = (age < 18) ? "Too young" : "Old enough ";
//     document.getElementById("demo").innerHTML = abc + "to vote"
// }



// The Nullish Coalescing Operator (??)
// The ?? operator returns the first argument if it is not nullish (null or undefined).

// Otherwise it returns the second argument.

// // Example

// let name = null;
// let text = "missing";
// let result = name ?? text;

// console.log(`The name is ${result}`);




// The Optional Chaining Operator (?.)
// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

// Example

// const car = {type:"Fiat", model:"500", color:"white"};
// console.log(car?.type);
