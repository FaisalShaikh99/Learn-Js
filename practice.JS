//  index     =>  0        1        2       3         4
// const names = ['Faisal',"Bilal", "noman","Faizan" ,"Vahid"]
// console.log(names.splice(1,3))

// const names2 = ["Faisal","Bilal", "noman","Faizan" ,"Vahid"]
// console.log(names2.slice(1,4))

// const Languages = ["JS", "Python","JAVA"]
// Languages.push("php")
// console.log(Languages)

// const Languages = ["JS", "Python","JAVA"]
// Languages.unshift("php")
// console.log(Languages)


// const Languages = ["JS", "Python","JAVA"]
// Languages.shift()
// console.log(Languages)

// const Languages = ["JS", "Python","JAVA"]
// Languages.pop()
// console.log(Languages)


            //   0      1       2           3           4          5
// let cars = ["BMW","Audi","Marcdis","Range Rover", "Brezza","Rollce Royal"]

// console.log(cars.slice(1));

         //    0    1       2         3         4        5    
// const bike = ["r1","MT","Splender","Pulser","Kawasaki","h2"] 
// bike.splice(1,4,)
// console.log(bike)




// singleton
// Object.create

// object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof  JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// const email1 = {}
// email1. email = "faisal554@gmail.com",
//     // Object.freeze(email1)
//  email1.email =  "faisal554@google.com"
// console.log(email1)


// const company = ["tcs","meta","google"]
// const company1 = ["microsoft","ola","uber"]
// const allcompany =[...company,...company1]
// console.log(allcompany)



// const company = ["tcs","meta","google"]
// const company1 = ["microsoft","ola","uber"]

// const all_compaines = company.concat(company1)
// console.log(all_compaines)

// const numbers =  [1,2,3,[4,5,6],7,8,[9,10],11,[12,13],[14,15]]
// const allnumbers = numbers.flat("1")
// console.log(allnumbers)

// const blutooth  = {}
// blutooth.email = "fjduh65@435.voifd"
// Object.freeze(blutooth)
// blutooth.email = "gfgasdas@4548.dfs"
// console.log(blutooth)

// const array = [4,6,8,6,7,9,5]
// const a = array.splice();
// console.log(a)

// const user= {
//     name : "faisal",
//     age : 17,
//     email :"faizan"
    
// }

/*
user.email = "faisal78"
console.log(  user)

let name = "faisal"
name = "faizan"
console.log(`name`, name);
*/



// let x = 1;
// function example() {
//   let x = 2;
//   console.log(x);
// }
// example()


// Example of var variable 

// var x = 10;
// var y = 20;
// var z = x + y;

// console.log(`value of z: ${z}`)

// Example of let variable 


// let x = 10;
// let y = 20;
// let z = x + y;

// console.log(`value of z: ${z}`)



// Example of const variable 


// const x = 10;
// const y = 20;
// const z = x + y;

// console.log(`value of z: ${z}`)

// Example of mix variable 


// var x = 20;
// let y = 30;
// const z = x + y;

// console.log(z);

// // or

// const price1 =  10;
// const price2 =  10;
// let total = price1 + price2;

// console.log(total);

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


// String substring()

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


// const name = "      Faisal Shaikh       "
// console.log(name.trim());           // All spaces are remvoed
// console.log(name.trimStart());     // Start spaces are remvoed
// console.log(name.trimEnd());      // End spaces are remvoed



// const xyz = {
//     firstname : "Faisal",
//     lastname  : "Shaikh ",
//     age  : 17,
//     fullname : function() {
//         console.log(`My name is ${this.firstname} ${this.lastname} and i am ${this.age} years old`);
        
//     }

// }
// xyz

// Object MEthdos

let mydata = {fisrtname : "Faisal", lastname: "shaikh", age : 17}

let data= {
    name : "",
    address : ""
}

let Data = {};
Data.name = "";
Data.address = "";
Data.dob = "";

let DATA = new Object();
Data.name = "";
Data.address = "";
Data.dob = "";

// let x = {
//     name : "Faisal",
//     age : 17,
//     data : function() {
//         console.log(this.name + this.age);
        
//     }
// }
// x.data()

// let x = {
//     lastname : "shaikh",
//     age : 17,
//     data : function(firstname) {
//         console.log(firstname + this.lastname);
        
//     }
// }
// x.data("Faisal")



const number = [5,4,6,7,8,9,12,45,78,36,95,14]
number.sort(function(a,b) {return a -b })
console.log(number);
