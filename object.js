// ***********Object****************** */

// Defination:
// const cars =  {keys and values }

// M:1

// const mydata = {firstname : "Faisal", lastname: "Shaikh", age : 17}  //Single line code
// console.log(mydata);
// console.log(mydata.firstname); 

// M:2


// let car = {
//     name : "BREZZA",
//     color :  "White",         //Multiple line code
//     Weight : "1000kg"     
// }
// console.log(car.name);  //or//  
// console.log(car["name"]);  


// M:3

// let companiesname = {};

// companiesname.one = "Ola";
// companiesname.two = "uber";
// companiesname.three = "Relience";
// companiesname.four = "adani";
// companiesname.five = "Google";

// console.log(companiesname);

// M:4

// const user = new Object();

// user.firstname =  "faisal"
// user.lastname =  "shaikh"
// user.age =  17
// user.id =  "faisal99"

// console.log(user);


// M:5 with function 

//  m:1

// const MyDetails = {
//     firstname : "Faisal",
//     lastname : " shaikh",
//     fullname : function(name){
//         console.log(  "How are you " + name + this.lastname + "!")
//     }
// }
// MyDetails.fullname("Faisal");
 
//  m:2

// const myDetails = {
//     firstname : "Faisal",
//     lastname : " shaikh",
//     fullname : function(){
//         console.log(  "How are you " + this.firstname + this.lastname + "!")
//     }
// }
// MyDetails.fullname();


// Mutable Object 

// const Data = {
//     name : "Faisal",
//     id  :  "Faisal99",
//     age : 17
// }
//  const x = Data;
//  x.age = 18;
//  x.id = "bilal958";

// console.log(Data);



// const person = {
//     firstname: "Faisal",
//     lastname: "Shaikh",
//     age: 17,
//     eyecolor: "black"
//   };
//   console.log(person.firstname  + " is " + person.age + " years old boy");
//   console.log(`${person.firstname} is ${person.age} year old`);
//   console.log(person["firstname"]  + " is " +  person["age"] + " year old")




// const person = {
//     firstname: "Faisal",
//     lastname: "Shaikh",
//     age: 17,
//     eyecolor: "black"
//   };
// let x = "firstname"
// let y = "age"

// console.log(person[x]  + " is " +  person[y] + " years old boy");




// how to value of keys ******************************

// const person = {
//         firstname: "Faisal",
//         lastname: "Shaikh",
//         age: 17,
//         eyecolor: "black"
//       };
// let firstname = "bilal"
// let age = 14

//   console.log(firstname  + " is " +  age + " years old boy");





// /********Adding a new Property */

// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
//   };
  
//   person.nationality = " Indian";
//   console.log(person.firstname + " is"  +  person.nationality);
  


// *******Deleting Properties */

// const person = {
//         firstname: "John",
//         lastname: "Doe",
//         age: 50,
//         eyecolor: "blue"
//       };

//       delete person.age      or       delete person["age"]
//   console.log(person.firstname + " is "  +  person.age + " years old");



// Nested Objects

// myObj = {
//     name:"John",
//     age:30,
//     myCars: {
//       car1:"Ford",
//       car2:"BMW",
//       car3:"Fiat"
//     }
//   }
//   console.log(myObj.myCars.car2);   or
//   console.log(myObj.myCars["car2"]);
//  console.log(myObj["myCars"]["car2"]);
  
//   let p1 = "myCars";
//   let p2 = "car2";
//   console.log(myObj[p1][p2]);
  







//   *******//Object Methods////******* */

// M:1


//    const person = {
//             firstname: "John",
//             lastname: "Doe",
//             age: 50,
//             eyecolor: "blue",
//             fullname : function(){
//               console.log(person.firstname + " is " + person.lastname)
//             }
//           };
 
//   person.fullname()

// M:2

// const person = {
//   firstname: "John",
//   lastname: "Doe",
//   age: 50,
//   eyecolor: "blue",
//   fullname : function(){
//                 console.log(this.firstname + " is " + this.lastname)
//               }
//  };
//  person.fullname()


// M:3 => toUppercase

// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue",
//     fullname : function(){
//       return    (this.firstname + " is " + this.lastname).toUpperCase();
//          }
//    };
//    console.log(person.fullname());
   
  
// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue",
//     fullname : function(){
//       return    (this.firstname + " is " + this.lastname).toLowerCase();
//          }
//    };
//    console.log(person.fullname());
   
  


// /*********************Object Display */

// By Loop:


// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue",  
//    };

// let text = "";

// for(let x  in person) {
//    text += person[x]
// }
// console.log(text);


// +++++++Using Object.values()++++++

// const person = {
//       firstname: "John",
//       lastname: "Doe",
//       age: 50,
//       eyecolor: "blue",  
//      };
  

//      let myArray  = Object.values(person)
//      console.log(myArray);
     



// const person = {
//       firstname: "John",
//       lastname: "Doe",
//       age: 50,
//       eyecolor: "blue",  
//      };
//   console.log( Object.entries(person))
//   console.log( Object.keys(person))
//   console.log( Object.values(person))


// +++++++++++++Using JSON.stringify()++++++++//


// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue",  
//    };
//    let myString = JSON.stringify(person)
//    console.log(myString);
   

// ++++++++++++++++++++ Object Constructors+++++++++++++++++++

// function perosn(first,last,age) {
//   this.firstname = first;
//   this.lastname = last;
//   this.age = age;
// }


// let Myfullname = new perosn('Faisal',' Shaikh',17)
// console.log(Myfullname.firstname + Myfullname.lastname + " is " +  Myfullname.age + " years old");


// function myFamily(first, last, ) {
//   this.firstname = first;
//   this.lastname = last;
// }


// const Myname = new myFamily("Faisal" ," Shaikh")
// const MyFathername = new myFamily("Sadik" ,"bhai")
// const MyMothername = new myFamily("Sahin" ," banu")
// const MySistername = new myFamily("Saleha" ," banu")
// const MySister2name = new myFamily("Afrin" ," banu")

// console.log("My name is " + Myname.firstname + Myname.lastname);
// console.log("My Fathername is " + MyFathername.firstname + MyFathername.lastname);
// console.log("My MyMothername is " + MyMothername.firstname + MyMothername.lastname);
// console.log("My MySistername is " + MySistername.firstname + MySistername.lastname);
// console.log("My MySister2name is " + MySister2name.firstname + MySister2name.lastname);


// Adding a Property to an Object
// Adding a property to a created object is easy:

// function myFamily(first, last, ) {
//   this.firstname = first;
//   this.lastname = last;
//   this.Nationality = "Indain"

// }
// let Myfullname = new myFamily('Faisal',' Shaikh',17)
// console.log(Myfullname.firstname + " is " + Myfullname.Nationality + " boy");




// const name = ["Faisal","Bilal","Noman"];
// name.sort();
// console.log(name);

// const num = [43,45,32,64,8,7,93,31,3];
// num.sort(function (a,b) {return b -a});
// console.log(num);




