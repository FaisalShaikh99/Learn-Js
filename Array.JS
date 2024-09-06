///******Definations for Arrays */

// 
// 1:-
//  const cars = ["Saab", "Volvo", "BMW"];

// 2:- 
// let cars = [
//     "saab",
//     "volvo",
//     "BMW",
// ]
// console.log(cars);

// 3:- 
// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";

// console.log(cars);



// let a = "Faisal";
// let b = "Bilal";
// let c = "Noman";




// Syntax:
// const array_name = [item1, item2, ...]; 

// Using the JavaScript Keyword new

// const cars = new Array("Saab", "Volvo", "BMW")
// console.log(cars);
// console.log(typeof cars);



// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);



// Changing an Array Element
// This statement changes the value of the first element in cars:


// Example:

// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = "Opel";
// console.log(cars);



// Converting an Array to a String
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

// Example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString("Graps"));





// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// But, JavaScript arrays are best described as arrays.

// Arrays use numbers to access its "elements". In this example, person[0] returns Faisal:

// const names = ["Faisal","Noman","Bilal"]
// console.log(names[0]);


// Object:
// const person ={ 
//     Firstname: "Faisal",
//     Lastname: "Shaikh",
//     age   : 17

// }
// console.log(person.Firstname);



// The length Property
// The length property of an array returns the length of an array (the number of array elements).

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length);


// Accessing the Last Array Element:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits[fruits.length -1]);



// const fruits = ["Apple","Banana", "Mango", "Graps"]
// let flen = fruits.length;

// let text = ""

// for(let i = 0; i<flen; i++){
//     text += fruits[i]

// }
// console.log(text);


// Adding Array Elements
// The easiest way to add a new element to an array is using the push() method:

// Example

// const fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
// console.log(fruits);




// New element can also be added to an array using the length property:


// const cars = [ "BMW", "volvo","Saab", "Audi"]
// document.getElementById("demo").innerHTML = cars;

// function myFunction(){
//   cars[cars.length] = "Brezza";
//   document.getElementById("demo").innerHTML = cars;
// }



// Associative Arrays

// const person = [];
// person[0] = "John";
// person[1] = "Doe";
// person[2] = 46;
// person.length;    // Will return 3
// person[0]; 
// console.log( person[0] + " " + person.length);


// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// person.length;     // Will return 0
// person[0];         // Will return undefined
// console.log(person.length + " " + person[0]);


// How to Recognize an Array:

// const fruits = ["Banana", "Orange", "Apple"]
// let type = typeof fruits
// console.log(type);



// m-1
// const fruits = ["Banana", "Orange", "Apple"]
// console.log(Array.isArray(fruits));            //true


// m-2

// const fruits = ["Banana", "Orange", "Apple"];

// console.log((fruits instanceof Array));




// Nested Arrays and Objects:


// let x = ""

// const Data = {
//     name : "Faisal",
//     age   : 17,
//     Mobiles : [
//         {name : "iphone", model  : ["iphone7", "iphone7S","iphone8"]},
//         {name : "realme", model  : ["Narzo", "realme12","realme13"]},
//         {name : "vivo", model  : ["vivo v27", "vivo v30","vivo v40"]},
//     ]
// }

// for(let i in Data.Mobiles) {
    
//     x += "<h1>" + Data.Mobiles[i].name + "</h1>"
   
//      for(let j in Data.Mobiles[i].model) {
//        x +=  "<h4>" + Data.Mobiles[i].model[j] + "<br>" + "<h4>"
//      }


// }

// document.getElementById("demo").innerHTML = x



// *************Basic Arrays Methods*****************//

// length method:

// const fruits = ["Banana", "Orange", "Apple"];
// console.log(fruits.length);


// Array .toString()

// const fruits = ["Banana", "Orange", "Apple"];
// console.log( fruits.toString());


// // At:

// const fruits = ["Banana", "Orange", "Apple"];
// console.log( fruits.at(2));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[2];
// console.log(fruit);



// Array join():

// const fruits = ["Banana ", " Orange", " Apple ", " Mango"];
// console.log(fruits.join("+"));
// console.log(fruits.join("*"));      // =>      //output Banana * Orange* Apple * Mango


// Popping and Pushing:

// Array pop():The pop() method removes the last element from an array:

// const fruits = ["Banana ", " Orange", " Apple ", " Mango"];
// fruits.pop();
// console.log(fruits);


// Array push():The push() method adds a new element to an array (at the end):

// const fruits = ["Banana ", " Orange", " Apple ", " Mango"];
// fruits.push("Graps");
// console.log(fruits);



// Array shift():
// The shift() method removes the first array element and "shifts" all other elements to a lower index.

// const fruits = ["Banana ", " Orange", " Apple ", " Mango"];
// fruits.shift();
// console.log(fruits);


// Array unshift():
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

// const fruits = ["Banana ", " Orange", " Apple ", " Mango"];
// fruits.unshift("Lemon");
// console.log(fruits);



// Changing Elements:

// const fruits = ["Banana ", " Orange", " Apple ", " Mango"];
// fruits[3]  = "Graps"
// console.log(fruits);



//+++++++ => Without push method adding new Element

// const fruits = ["Banana ", " Orange", " Apple ", " Mango"];
// fruits[fruits.length] = "Lemon"
// console.log(fruits);




// Delete methode:

// const fruits = ["Banana ", " Orange", " Apple ", " Mango"];
// delete fruits[0];
// console.log(fruits);             //output : [ <1 empty item>, ' Orange', ' Apple ', ' Mango' ]



// const fruits = ["Banana ", " Orange", " Apple ", " Mango"];
// console.log(
//     fruits[0],
//     delete fruits[0]
// );


// Merging Arrays (Concatenating)
// JavaScript Array concat()

// const bikes = ["MT", "BMW", "Pulser"]
// const cars = ["volvo", "audi", "Mersidis"]

// console.log(bikes.concat(cars));


// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];

// console.log(arr1.concat(arr2, arr3));


// const bikes = ["MT", "BMW", "Pulser"]
// console.log(bikes.concat("HAYABUSA"));


// Array copyWithin()
// The copyWithin() method copies array elements to another position in an array:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(0, 2);
// console.log(fruits);



// Array flat()
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.

// const myArr = [[1,2],[3,4],[5,6]];
// console.log(myArr.flat());

// Array flatMap()

// const abc = [1,2,3,4,5,6,7,8,9,10]
// const xyz = abc.flatMap(x => [x,x*10])
// console.log(xyz);



// Array splice(): The splice() method can be used to add new items to an array:


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(3, "Lemon", "Kiwi");
// fruits.splice(3, 0, "Lemon", "Kiwi");
// fruits.splice(2,2, "Lemon", "Kiwi");
// console.log(fruits);


// const Numbers = [1,2,3,4,6,7,8,9,10]
// Numbers.splice(4,0,5)                  //output: [1,2,3,4,5,6,7,8,9,0]
// Numbers.splice(4,5)
// console.log(Numbers);                    // output: [ 1, 2, 3, 4 ]


// splice() to Remove Elements:

// const fruits = ["Banana", "Orange", "Apple", "Mango","Graps"];
// fruits.splice(0,1 );
// console.log(fruits);



// Array toSpliced():

// const Months = ["Jan", "Feb", "March", "Apr", "May"]
// console.log(Months.toSpliced(0,2));




// Array slice()
// The slice() method slices out a piece of an array into a new array:

// Example
// Slice out a part of an array starting from array element 1 ("Orange"):

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(0 ,1);
// const citrus2 = fruits.slice( 1);
// console.log(citrus);
// console.log(citrus2);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3);
// console.log(citrus);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2);
// console.log(citrus);




// toString()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());






//************Array Search Methods/////////// */


// const fruits = ["Apple","Banana","Mango", "Orange"]
// const position = fruits.indexOf("Apple") + 1;
// console.log(("Apple is found in " + position));


// lastIndexOf():

// const fruits = ["Apple","Banana","Mango", "Orange","Apple"]
// console.log(fruits.lastIndexOf("Apple"));


// Array includes():

// const fruits = ["Apple","Banana","Mango", "Orange",]
// console.log(fruits.includes("Mango"));                // output: true
// console.log(fruits.includes("Graps"));               // output: false


// Array find()





/////******************Sorting Arrays***************************///// */ */

// Sorting an Array: The sort() method sorts an array alphabetically:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());

// Reversing an Array: The reverse() method reverses the elements in an array:

// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// console.log(fruits.reverse());


// By combining sort() and reverse(), you can sort an array in descending order:

// Example:-
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toSorted());                 // same to sort method

// const months = ["Jan", "Feb", "Mar", "Apr"];
// console.log(months.toReversed());                 // same to revers method


// Numeric Sort:

// const x = [5,32,45,34,56,40,6,30]
// console.log(x.sort(function(a,b) {return a - b}));
// console.log(x.sort(function(a,b) {return b - a}));



// The Compare Function():

// const number = [5,10,45,25,50,100,47]
// document.getElementById("demo").innerHTML = number;

// function function1() {
//     number.sort();
// document.getElementById("demo").innerHTML = number;
// }

// function function2() {
//     number.sort(function(a,b)  { return a - b});
// document.getElementById("demo").innerHTML = number;

// }

// Sorting an Array in Random Order: Using a sort function, like explained above, you can sort an numeric array in random order

// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo").innerHTML = points

// function myFunction() {
//     points.sort(function(){return 0.5 - Math.random()});}
//     document.getElementById("demo").innerHTML = points

// const number = [50,41,20,47,12,25,100,59,78,45,76,85,200]
// number.sort(function(a,b) { return (a - b)});
// number.sort(function(a,b) { return (b - a)});
// console.log(number[0]);
// console.log(number);






//*******************Array Iteration Methods********************//

// Array Foreach: The forEach() method calls a function (a callback function) once for each array element.

// let num = [1,56,42,2,89,174]

// for(let i=0; i<num.length;i++ ) {
//     console.log(num[i]);
    
// }


//  foreach loop

// const Number = [558,46,78,25,699,5,4,5,]
// Number.forEach((value,index,Array)=>{
//     console.log(value,index,Array + 2);   
// })

// Array.from

// const name = "Faisal"
// console.log(Array.from(name));


// for of and for in loop

// const number  = [5,8,577,6,7,3]

// for (let i of number ) {
//     console.log(i);                    //=> This method is better than first method
    
// }


// for (let i in number) {
//     console.log(number [i]);                 //=> This give only its values
//     console.log(i);                        //=> This give only its keys
    
// }



//map */

// Method:1

// const number = [98,89,87,67,88,56]

// number.forEach((value, index, Array, )=> {
//         value * 5
//         console.log(value, index, Array);
        
// });


// Method:2

// const number2 = [98,89,87,67,88,56]
// const num = number2.map(myfunction);

// function myfunction(value, index, Array) {
//          return value *  2
         
// }
// console.log(num);


// flatmap:

// const x = [1,2,3,4,5,6,7]
// const y = x.flatMap(x => [x,x*10])
// console.log(y);



// Array filter():
// The filter() method creates a new array with array elements that pass a test.
// This example creates a new array from elements with a value larger than 18:

// const number = [5,89,56,78,15,6,48,52,36]
// const lessthan15 = number.filter(  myfunction  )

// function myfunction(value, index, Arrray) {
//         return value < 15
// }
// console.log(lessthan15);




//***************Reduce Method**************** */

// const num = [65,78,47,25,84,53,15]
// const xyz = num.reduce(myfunction)


// function myfunction(total, value,index,Array) {

//         return  total + value

// }
// console.log(xyz);


// ++++=> The reduce() method can accept an initial value:

// Example
// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction, 100 - 50);

// function myFunction(total, value) {
//   return total + value;
// }

// console.log(sum);







//*/********************Reduceright********************** */

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduceRight(myFunction, 100 - 50);

// function myFunction(total, value) {
//   return total + value;
// }

// console.log(sum);



// Array every()
// The every() method checks if all array values pass a test.
// This example checks if all array values are larger than


// const a = [4,57,6,88,67,85]
// const b = a.every(abc);

// function abc( value,index,Array) {
//       return value > 4
// }

// console.log(b);


// Array.from 

// const abc = ["FAISAL"]
// console.log(Array.from(abc));



// Array keys:

// const data = ["Faisal", "Bilal" , " Noman"]
// const abc = data.keys();

// let txt = " ";
// for (let x of abc) {
//          txt += x +  "<br>"
// }
// console.log(txt);


// Array values 

// const data = ["Faisal", "Bilal" , " Noman"]
// const abc = data.values();

// let txt = " ";
// for (let x of abc) {
//          txt += x +  "<br>"
// }
// console.log(txt);


// Array entries 

//  const data = ["Faisal", "Bilal" , " Noman"]
// const abc = data.entries();

// let txt = " ";
// for (let x of abc) {
//          txt += x +  "<br>"
// }
// console.log(txt);




// Array with()

// const months = ["jan", "feb", "march", "apr"]
// const abc   =  months.with(0, "January")
//                      .with(1, "February")
//                      .with(2, "March")
//                      .with(3, "April")


// console.log(abc);




// Array Sperad (...)


// const a1 = ["Jan","Feb", "March", "Apr"]
// const a2 = ["May","Jun", "July", "Aug"]
// const a3 = ["Sep","Oct", "Nov", "Dec"]

// console.log(...a1,...a2,...a3,);
