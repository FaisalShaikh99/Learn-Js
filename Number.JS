/***********************Number************************ */

// WARNING !!

// JavaScript uses the + operator for both addition and concatenation.

// Numbers are added. Strings are concatenated.


// let x = 0.2 + 0.1;
// console.log(x);

// let y = (0.2 * 10 + 0.1 * 10) / 10;
// console.log(y);


// let x = 10;
// let y = 20;
// console.log(x + y);     // output : 30

// let x = "10";
// let y = "20";
// console.log(x + y);     // output :1020

// let x = "10";
// let y = 20;
// let z = x + y;
// console.log(z);         // output :1020

// let x = 10;
// let y = "20";
// let z = x + y;
// console.log(z);         // output :1020

// let x = 10;
// let y = 20;
// let z = x + y;
// console.log("Total : ", z );         // Total :30


// let x = 10;
// let y = 20;
// let z = "30";
// let result = x + y + z; 
// console.log(result);         //3030


// let x = "100";
// let y = "10";           // But this is number
// let z = x / y;
// console.log(z);        // output : 10


// let x = "100";
// let y = "10";           // But this is number
// let z = x * y;
// console.log(z);         // output : 1000

// let x = "100";
// let y = "10";   
// let z = x - y; 
// console.log(z);         // output : 90

// let x = "100";
// let y = "10";               // But this is not number, this is a string
// let z = x + y;           
// console.log(z);         // output : 90


// +++++//NaN - Not a Number

// let x = 100 / "Apple";
// let y = 100 / "10";       => output :  10
// console.log(x);
// console.log(y);


// let x = NaN;
// let y = 5;
// let z = x + y;
    
// console.log(typeof z);       //=> output :  NaN


// let myNumber = 2; 
// let txt = "";
// while (myNumber != Infinity) {
//    myNumber = myNumber * myNumber;
//    txt = txt + myNumber + "<br>";
// }
// console.log(txt);



// let x =  2 / 0;
// let y = -2 / 0;
// console.log(x + y);
// console.log(x);


// let x = 123;
// let y = new Number(123);
// console.log(typeof y);

// let x = 500;
// let y = new Number(500);  //true
// console.log(x==y);

// let x = 500;
// let y = new Number(600);
// console.log(x==y);


// let x = 500;
// let y = new Number(500);
// console.log(x===y);




/////Bigint ////

// let x = 9999999999999999;
// let y = BigInt("9999999999999999");
// console.log(typeof x);
// console.log(typeof y);

// console.log(y);


// let x = BigInt(999999999999999);
// let type = typeof x;
// console.log(type);



// toString() Method:

// let x = 123
// console.log(x.toString(2));



// toExponential() Method:

// let x = 9.656;
// console.log(x.toExponential(2));
// console.log(x.toExponential(4));
// console.log(x.toExponential(6));



// toFixed() Method:

// let x = 9.656;
// console.log(x.toFixed(0));
// console.log(x.toFixed(2));
// console.log(x.toFixed(4));
// console.log(x.toFixed(6));


// toPrecision() Method

// let x = 9.656;
// console.log(x.toPrecision());
// console.log(x.toPrecision(2));
// console.log(x.toPrecision(4));
// console.log(x.toPrecision(6));



// valueOf() Method

// let x = 123;
// x.valueOf();
// (123).valueOf();
// (100 + 23).valueOf()
// console.log(x);


// Number() Method:

// let  a = Number(true);
// let  b = Number(false);
// let  c = Number("10");
// let  d = Number("  10");
// let  e = Number("10  ");
// let  f = Number(" 10  ");
// let  g = Number("10.33");
// let  h = Number("10,33");
// let  i = Number("10 33");
// let  j = Number("John");

// console.log(a,b,c,d,e,f,g,h,i,j);


// Number() Method Used on Dates:

// let x = Number(new Date(8/10/2024))
// console.log(typeof x);
// console.log( x);


// let x  = new Date(7/8/2024)
// console.log(Number.x);



// parseInt() Method: parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:


// console.log(parseInt("-10"));
// console.log(parseInt("-10.33"));
// console.log(parseInt("10"));
// console.log(parseInt("10.33"));
// console.log(parseInt("10 20 30"));
// console.log(parseInt("10 years"));
// console.log(parseInt("years 10"));




// parseFloat()   or parseint Method:

// console.log(parseFloat("10"));
// console.log(parseFloat("10.33"));
// console.log(parseFloat("10 20 30"));
// console.log(parseInt("10 years"));
// console.log(parseFloat("years 10"));



// Number.isInteger() Method
// The Number.isInteger() method returns true if the argument is an integer.
// Example: 

// => In short if without point => True
// => In short if with point => False

// console.log(Number.isInteger(10));             
// console.log(Number.isInteger(5314));
// console.log(Number.isInteger(5314.69));
// console.log(Number.isInteger(10.5));


// The Number.isSafeInteger() Method:
// A safe integer is an integer that can be exactly represented as a double precision number.
// The Number.isSafeInteger() method returns true if the argument is a safe integer.

// console.log(Number.isSafeInteger(10));
// console.log(Number.isSafeInteger(12345678901234567890));


// parseFloat() Method:
// Number.parseFloat() parses a string and returns a number.
// Spaces are allowed. Only the first number is returned:

// console.log(Number.parseFloat("10"));
// console.log(Number.parseFloat("10.33"));
// console.log(Number.parseFloat("10 20 30"));
// console.log(Number.parseFloat("10 years"));
// console.log(Number.parseFloat("years 10"));





///////******Number Properties ***/////////// */

// EPSILON:
// Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.

// let x = Number.EPSILON
// console.log(x);


// MAX_VALUE:
// Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.

// let x = Number.MAX_VALUE
// console.log(x);


// let x = 8;
// console.log(x.MAX_VALUE);    //undefined


// MIN_VALUE
// Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.

// let x = Number.MIN_VALUE;
// console.log(x);


// MAX_SAFE_INTEGER
// Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.
// Number.MAX_SAFE_INTEGER is (253 - 1).


// let x = Number.MAX_SAFE_INTEGER;
// console.log(x );



// MIN_SAFE_INTEGER
// Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.

// Number.MIN_SAFE_INTEGER is -(253 - 1).

//  Example
// let x = Number.MIN_SAFE_INTEGER;
// console.log(x);


// javaScript POSITIVE_INFINITY
// Example

// let x = Number.POSITIVE_INFINITY;
// console.log(x);


// POSITIVE_INFINITY;
// POSITIVE_INFINITY is returned on overflow:

// let y = 1 / 0;
// console.log(y);



// NEGATIVE_INFINITY
// Example

// let x = Number.NEGATIVE_INFINITY;
// console.log(x);

// NEGATIVE_INFINITY is returned on overflow:

// let y = -1 / 0;
// console.log(y);


// NaN - Not a Number
// NaN is a JavaScript reserved word for a number that is not a legal number.

// Examples

// let x = Number.NaN;
// console.log(x);

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

// let y = 100 / "Apple";
// console.log(y);

