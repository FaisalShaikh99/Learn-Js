//******Methods of Maths */

//Math.E        // returns Euler's number
//Math.PI       // returns PI
//Math.SQRT2    // returns the square root of 2
//Math.SQRT1_2  // returns the square root of 1/2
//Math.LN2      // returns the natural logarithm of 2
//Math.LN10     // returns the natural logarithm of 10
//Math.LOG2E    // returns base 2 logarithm of E
//Math.LOG10E   // returns base 10 logarithm of E


// Round: Math.round(x) returns the nearest integer`

// console.log(Math.round(3.6));               //Output: 4
// console.log(Math.round(3.5));              //Output: 4``
// console.log(Math.round(3.4));              //Output: 3
// console.log(Math.round(3.2));             //Output: 3

//ceil: Math.ceil(x) returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(3.9));                       // 4
// console.log(Math.ceil(3.6));                      // 4
// console.log(Math.ceil(3.5));                     // 4
// console.log(Math.ceil(3.2));                    // 4
// console.log(Math.ceil(-3.2));                  //-3


//floor: Math.floor(x) returns the value of x rounded down to its nearest integer

// console.log(Math.floor(3.9));                       // 3
// console.log(Math.floor(3.6));                      // 3
// console.log(Math.floor(3.5));                     // 3
// console.log(Math.floor(3.2));                    // 3
// console.log(Math.floor(-3.2));                  //-4


//trunc: Math.trunc(x) returns the integer part of x

// console.log(Math.trunc(3.9));                       // 3
// console.log(Math.trunc(3.6));                      // 3
// console.log(Math.trunc(3.5));                     // 3
// console.log(Math.trunc(3.2));                    // 3
// console.log(Math.trunc(-3.2));                  //3


//sign: Math.sign(x) returns if x is negative, null or positive

// console.log(Math.sign(0));                       // 0
// console.log(Math.sign(4));                      // 1
// console.log(Math.sign(-4));                    //-1
// console.log(Math.sign(3.2));                  // 1
// console.log(Math.sign(-3.2));                //-1 
// console.log(Math.sign(0.2));                //1


// Power(): Math.pow(x, y) returns the value of x to the power of y:

// console.log(Math.pow(8,2));               //64


// Math.sqrt(): Math.sqrt(x) returns the square root of x:


// console.log(Math.sqrt(16));                        //4


// Math.abs() : Math.abs(x) returns the absolute (positive) value of x:


// console.log(Math.abs(-4.7));
// console.log(Math.abs(-9999));


// Math.sin():

// console.log(Math.sin(Math.PI/2));
// console.log(Math.sin(Math.PI/4));

// Math.cos():

// console.log(Math.cos(Math.PI/4));
// console.log(Math.cos(90*Math.PI/180));


// Math.min() and Math.max():

// console.log(Math.min(-546465415,22,45,78,69,57,96,55,1000,2000,54656));
// console.log(Math.max(15,22,45,78,69,57,96,55,544646665));


// Math.random(): Math.random() returns a random number between 0 and 1:

// console.log(Math.random());


// The Math.log() Method
// Math.log(x) returns the natural logarithm of x.
// The natural logarithm returns the time needed to reach a certain level of growth:


// console.log(Math.log(3));
// console.log(Math.log(10));


// The Math.log2() Method: Math.log2(x) returns the base 2 logarithm of x.
                        // : How many times must we multiply 2 to get 8?

// console.log(Math.log2(2));
// console.log(Math.log2(4));
// console.log(Math.log2(8));
// console.log(Math.log2(16));
// console.log(Math.log2(32));
// console.log(Math.log2(64));



// The Math.log10() Method: Math.log10(x) returns the base 10 logarithm of x.
                        // : How many times must we multiply 10 to get 1000?
// console.log(Math.log10(10000));
          





//////////////**************Random*************************/////////////////// */

// console.log(Math.random(5));
// console.log(Math.random("5"));
// console.log(Math.random());


// // Returns a random integer from 0 to 9:
// console.log(Math.floor(Math.random() * 10));

// // Returns a random integer from 0 to 10:
// console.log(Math.floor(Math.random() * 11));

// // Returns a random integer from 0 to 99:
// console.log(Math.floor(Math.random() * 100));

// Returns a random integer from 0 to 100:
// console.log(Math.floor(Math.random() * 101));

// Returns a random integer from 1 to 10:
// console.log(Math.floor(Math.random() * 10) + 1);


//*****A Proper Random Function */

// function getRndInteger(min,max) {
//     return Math.floor(Math.random() * (max - min + 1) )  +  min;
// }

