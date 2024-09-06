//    ******************** 1:veriables***********************// 

//  const UID = 'FaisalShaikh'      
//   let   ID = 'fd54'
//   var   no  = 11522;
//   email = 'xyz4@gmail.com'
//   m.no = "9879452897"


//   console.table[UID, ID, no, email, no,m.no];


//   ********************* 2: Data types*******************/////////////////// 

//  let name = "Faisal"; -> string
//   let age = 18; -> number
//  let isLoggedin = false;  -> this is a boolean 

// bigint -> jab bhot bada number hot hai tab bigint ka use hota hai
// string => "",
// boolean => ture/false
// null => standalone value
// undefined => jab value assign nai hoti 
// symbol => unique

//  // object 
//  console.log(typeof $)




//  let score =' true'
//  console.log(typeof score);



//  let valueInNumber = Number(score)

//   console.log(typeof valueInNumber);
//  console.log(valueInNumber);

//  "33" => 33
//  "5541bfjd" => NaN
//  true => 1; false => 0

//  let isLoggedin =0

//  let booleanIsLoggedIn = Boolean(isLoggedin)
//  console.log(isLoggedin);


//   let number = 4752

//   let MyNumber = undefined(number)
//   console.log(MyNumber);
//   console.log(typeof  MyNumber);


//   ****************************Operations******************// //

//  let value = -4

//  let negvalue = -value
//  console.log(negvalue)


//  console.log(6+5);
//  console.log(6-5);
//  console.log(6*5);
//  console.log(2**4);
//  console.log(6%5);
//  console.log(6/5);



//  let str1 = "hellow"
//  let str2 = "faisal"
//  let str3 =  str1 + str2

//  console.log(str3)


// console.log("1" +2)
// console.log( 1 + "2")
// console.log( 1 + "2" +1 + "2")
// console.log(1+2+"2")


//  console.log('true')
//  console.log(-false)




//   string to number  

//  let  string = '56'
//  let MyNumber = Number(string);   
//  console.log(typeof MyNumber);




// ***** comparison*****//

// console.log(2>1);
// console.log(2>=1)
// console.log(2!=false)
// console.log(2==false)
// console.log(2===false)
// console.log(2<false)
// console.log('2'>false)
// console.log(2>false)
// console.log("2">false)
// console.log("2"===false)
// console.log("02">false)
// console.log(2>false)
// console.log("02">false)


// console.log(null>1)
// console.log(null==0)
// console.log(null>=0)


// console.log(undefined==0)
// console.log(undefined>0)
// console.log(undefined<0)


// // === //
// console.log("3"==="3")




// **-******************** Primitive Datatypes*********************************************///




// 7 types : String, Number, Boolean, null, undefined, Symbol,Bigint


// const name = "Faisal Shaikh"  => String

// const MyNumber = 9978875712   => Number
  
// const isLoggedin = false      => Boolean

// const outsideTemp = null      => Object
 
// const username={}             => undefined
               

// const id = Symbol('2113')     => Symbol

// const bignumber = 2114453241789454n  => BigInt



// Reference (Non Primitive)  Datatypes :  Array, object, Functions, 


//  const names = ["faisal", "bilal", "Noman "]    => Objects (Array) 

//  {
//      name = 'faisal'                            => Object or scop
//       age = 18
//  } 


//  const myfunction = firstfunction(){
           
//  }                                               => Function 

// console.log(typeof names );
    

// const name = 'faisal shaikh '

// console.log(`My name is ${name}`)



// *********************************Methods of Strings*********************************//


// const name = "Faisal "
// const repoCount = 7
// console.log(name + repoCount + " value")

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName = new String('Free Fire')

// console.log(gameName);
// console.log(gameName.__proto__)  => mt value 
// console.log(gameName.length);
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('F'));
// console.log(gameName.split())    => stirng ko array me covert karne k liye.
// const NewStirng = gameName.substring(0,7) => Free Fi  0 to 6 tak   
// console.log(NewStirng)

// const anotherString = gameName.slice(-6,8 )
// console.log(anotherString);

// const newStirng = '  faisal  '
// console.log(newStirng);
// console.log(newStirng.trim());  => Trim binjarurat ki space ko remove karta hai


// const url = "https://faisal.com/faisal5%shaikh"
// console.log(url.replace('5%','-'))       => ye 5% ki jagah (-) rakhta hai
// console.log(url.includes('faisal'))   => jo name url me hai to true
// console.log(url.includes('faizan'))   => jo name url me nai hai to False


// ***********************************************Numbers******************************************************************************** */


// const score = 400
// console.log(score);

// const balance = new Number(1000)
// console.log(balance);````````````
// console.log(balance.toString().length);  => if you want to see length so tostring is neccesary for length
// console.log(balance.toFixed(2));   => kisi bhi kimmat ke piche point ke bad 0 rakhne ke liye 

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)); => approximately value rakhne k liye 
// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  => Value kitni hai Jaldi se samaj ne ke liye (by , (coma))jisme ('en-IN) ka matlab india ki value


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); => abs mean -4 ka +4 me convertion 
// console.log(Math.round(3.9)); => roud mean 3.9 ka 4 (nearest value)
// console.log(Math.ceil(4.1));    => ceil se maximum value hoti hai  4.1 me se 5 hoti hai
// console.log(Math.floor(4.1));    => floor se minimum value hoti hai 4.1 se 4 
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)




//************************Date and Time********************* */

// let  myDate = new Date()
// console.log(myDate)

// let  myDate =new Date()
// console.log(myDate)
// console.log(myDate.toString())  => with code 
// console.log(myDate.toDateString())        => day, month, date, and year
// console.log(myDate.toISOString())         => yr-month-Date and code          
// console.log(myDate.toJSON())              => yr-month-Date and code 
// console.log(myDate.toLocaleDateString())  => month/date/yr 
// console.log(myDate.toLocaleString())      => month/date/yr  and time 
// console.log(myDate.toLocaleTimeString())  => only time 
// console.log(myDate.toTimeString())        => time and (Pacific Daylight Time) 

// let newDate = new Date(2024,1,14)
// console.log(newDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
//  console.log(newDate.getTime());   ==> exect number k liye 
// console.log(Math.floor(Date.now()/1000))

// let todayDate = new Date()
// console.log(todayDate.getMonth())
// console.log(todayDate.getHours())
// console.log(todayDate.getDay())
// console.log(todayDate.getFullYear())


//---------------------Array--------------///

// const Arrays  = [ 0,1,2,3,4,5,6,7]
// console.log(Arrays)

// Array Methods
// Arrays.push("8") 
// console.log(Arrays)    => for add to last number 
// Arrays.unshift("-1")
// console.log(Arrays)    => for add to first number 
// Arrays.pop()
// console.log(Arrays)    => for delet to last number 
// Arrays.shift("5")
// console.log(Arrays)    => for delet to first number 
// console.log(Arrays.includes(10)) => jab elements me ye value hogi to true aayga nai to false 
// console.log(Arrays.indexOf())


// console.log(Arrays)

// const Arr1 = [0,1,2,3,4,5,6,7,8,9,10,11,12]
// const Arr2 = Arr1.join ()
// console.log(Arr1) 
// console.log(Arr2)   for without Array 


/***************Slice and Splice*********Note: This is a confusion topic**************** */

// slice 

// const Arrays  = [ 0,1,2,3,4,5,6,7]
// console.log("A", Arrays);
// const new1 = Arrays.slice(1,3)
// console.log(new1);

// note: slice me parameters me rakhe hue number me last number ke aage vale aur first number aur first number ke badd ke number output me milte hai 


// console.log("B", Arrays)

// const new2 = Arrays.splice(1,3)
// console.log("c", Arrays)

// console.log(new2);
 
// splice:- 

// let cars = ["BMW","Audi","Marcdis","Range Rover", "Brezza","Rollce Royal"]
// cars.splice(1,3, "Thar") => splice se kisi bhi value remove sakte hai aur koi aur value add kar sakte hai
// console.log(cars);     => splice me index ke threw (1,3) me 1, 2, 3 Elements remove hote hai ,
// console.log(cars.slice(1,4));ge => slice me index ke threw (1,4) me 1, 2, 3 Elements aaye,  4 nahi aayega. 

 
// ***************How to murj *******//

// ye vali method me Elements murj nahi hoge isme only new array add hoga jisse error ayegi

// const marvel_heros = [ "thor","spaiderman"," Ironman"]
// const dc_heroes = ["superman","flash","batman"]
// marvel_heros.push(dc_heroes)         
// console.log(marvel_heros)         (push/concat)


// ===>niche di gyi murj hojata hai

// : Method-1

// const companies = ["tcs","ola","uber","Relince","Google","Meta"]
// const companies2 = ["Microsoft","Amazon","Flipcart","Jio"]
// const companies3 = ["IBM","samsung","Adob","Myntra","Apple"]
// const allcompanies = companies.concat(companies2,companies3)
// console.log(allcompanies);


//*******Method-2 :- spread method*********** */


// const all_compaines = [...companies,...companies2,...companies3]
// console.log(all_compaines)

// Jab array ke andar ek se jyada array hote hai to kya kare?

// ex:-

// const numbers = [1,2,3,[4,5,6],7,[8,9,10],11,12,[11,12,13]]
// const otherNumber = numbers.flat(Infinity)
// console.log(otherNumber);


// console.log(Array.isArray("FAISAL"))   =>false
// console.log(Array.from("FAISAL"))      => ek-ek words

// for enyone number:-

// let score1 = 45
// let score2= 48
// let score3= 46
// console.log(Array.of(score1,score2,score3))




///*****************Obejects************************* */

// singleton and Object literals




// const mySym  = Symbol ("key1");
// console.log( mySym)

// const JSuser = {
//     [mySym] : "key1",  

    // name : "Faisal",
    // "fullname": "faisalshaikh",
    // age : 17,
    // // email :"Faisal6262@gmail.com",
    // isLoggedIn : true,
    // lastLoggedIn: ["Sunday","Monday"]

// }

// note : console me (.) threw aur [""] kar sakte he 

// console.log( JSuser[mySym])
// console.log( JSuser.name);     
// console.log( JSuser["name"]);
// console.log(JSuser ["fullname"])

// JSuser.email   = "faisal656@gmail.com"
// Object.freeze(JSuser)          
// JSuser.email =  "faisal656@google.com"
// console.log(JSuser)

// *********// I didn't get greeting ***************

// JSuser.greeting = function() {
//      console.log("Hello JS user")

// }
// JSuser.greetingTwo = function() {
//     console.log(`Hello JS user,${this.name}`)       
                                    //  => name is property of JSuser                                   
                                           
// }

// JSuser.greetingThree = function() {
//     console.log(`Hello JS user,${this.age}`)    
// }   
// console.log(JSuser.greeting());
// console.log(JSuser.greetingTwo());
// console.log(JSuser.greetingThree());


// Part-2 of objects

// const instaUser = new Object()



// ***object ke andar bhi object 

// const regularuser = {
//     email :" faisal45@gmail.com",
//     name  : {
//         username : {
//             firstname : 'Faisal',
//             Lastname : "Shaikh"
//         }
//     }
// }
// console.log(regularuser.email);
// console.log(regularuser.name.username)


// How to Murj Object

 // method - 1 :- Easy

// const obj1 = {1: "A", 2:"B"}
// const obj2 = {3:"C", 4:"D"}
// const obj3 = {5:"E", 6:"F"}

// const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)

// Method -2 

// const object1 = {1: "a", 2:"b"}
// const object2 = {3:"c", 4:"d"}
// const object3= {5:"e", 6:"f"}

// const  object4 = Object.assign({},object1,object2,object3)
// console.log(object4);

// why is error in this code 

// const users =   [
//     {
//         email : "df66@gmail.com",
//         id : 664
//     },
//     {
//         email : "df66@gmail.com",
//         id : 664
//     },
//     {
//         email : "df66@gmail.com",
//         id : 664
//     },
// ];
 
// console.log( usres[1].email)

// const Instauser = {




// console.log(Instauser)
// console.log(Object.keys(Instauser)) =>  for only keys 
// console.log(Object.values(Instauser)) => for only values 
// console.log(Object.entries(Instauser)) for both (keys and  value)

// console.log(Instauser.hasOwnProperty("Id"))  => propety ye name ki keys hoto true aayega and koi aur keys hoto false aayega 



//***********************19:- Functions********************/// */

// Defination:-
// function name() {
//     console.log("Faisal")
//     console.log("Faisal")
//     console.log("Faisal")
// }
// name()


// function addTwoNumbers(numb1, num2){
//     console.log(numb1 +++ num2);
// }
// const result = addTwoNumbers(56,7) 
// console.log(result)


// function addTwoNumbers(numb1, num2){
//    let result = numb1+ num2
//    return result
// }
// const result = addTwoNumbers(56,7) 
// console.log("Result:" ,result)


// function loginUserMessege(username = "Faisal"){
//    return `${username} just Logged in`

// }
// console.log(loginUserMessege()); 
      
       
        //    or  //
         
           
//  function loginUserMessege(username ){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//      return `${username} just Logged in`
         
//    }
//          console.log(loginUserMessege("Faisal")); 
         





// 20:- Functions with objects and array in javascript

// function calculatePrice (val1,val2,...num_1 ) {
//    return  num_1 
// }
// console.log(calculatePrice(200,400,500,600,900))



//==>  How to pass Object into the function***  */

// const user = {
//      name : "Faisal",
//      price : 500
// }

// function handleobject(enyobject){
//      console.log(`Username is ${enyobject.name} and price is ${enyobject.price}`)
// }
// // handleobject(user)
// handleobject({
//     name : "faizan ",
//     price : 1000
// });


// const newArray = [ 200,300,400,500]

// function returnValue(getarray) {
//       return getarray[2]
// }
// console.log(returnValue(newArray))


//// ******** 21 : Global and local scope **

// {} ke andar jo code likhte hai usko local scop kehte hai 
// {} ke bahar jo code likhte hai usko global scop kehte hai 


// if(true) {
 
//     let A = 10
//     const B = 20
//     var c = 30
    
// }
// console.log(A)    => this is not define
// console.log(B)    => this is not define
// console.log(c)    => this is  define beacuse varible is var



// ******22 : Scope level and mini hoisting

// method : 1 

// function one() {
//     const username = "Faisal"
    
//     function two() {
//         const website = " Youtuber"
//         console.log(username + website)

//     }
    // console.log(website)
// two()

// }
// console.log(username)

// one()


// method - 2 withouut function call

// if(true){
//     const username = "Faisal"
//     if(username == "Faisal") {
//         const website = "youtuber"
//         console.log(username + website)
    // }
    // console.log(website)    => this is not defined
// }
// console.log(username)       => this is not defined


// +++++ interesting ++


//  method  - 1
// function addone(num) {
//     return num + 1 
// }
// console.log(addone(5))

//  method  - 2  by variable => isme console.log ko function ke uper nahi likh sakte

// jis ko hoisting bolte hai

// console.log(addtwo(6))

// const addtwo = function (num) {
//     return num + 5

// }                                    
// console.log(addtwo(6))





//********* 23 : THIS and arrow function***********// */

// const user = {
//     username : "Faisal",
//     Price   : 350,

//    welcome : function () {
//         console.log(`${this.username}, just logged in`)
//         console.log(this)
//     }
// }

// user.welcome() => compulsory brackets keep here.
// user.username = "bilal"
// user.welcome()   If you want to change current value 

// console.log(this) => mt value 


// function mouse() {
//     let username = "faisal"
//     console.log(this.username)      => value is undefined
// }
// mouse()



// const mobile = function() {
//     let username = "faisal"       => value is undefined
//     console.log(this.username)
// }
// mobile()

//  const mobile = ()  => {
//         let username = "faisal"       
//         console.log(this.username)   => value is undefined
//     }
//     mobile(username)


// pure arrow function++++++++++++

// method - 1

// const addtwo = (num1 , num2) => {
//     return num1 - num2 
// }
// console.log (addtwo(5,3))

// method - 2 : emplishis return for react                       

// const addtwo = (num1 , num2) =>  num1 + num2                 

// const addtwo = (num1 , num2) =>  (num1 + num2 )

// console.log (addtwo(5,3))

// const addtwo = (num1 , num2) => ( {username : "Faisal"})
// console.log(addtwo())

///*********** 24 : Immediately Invoked Function Expressions (IIFE) */

// function keyboard() {
//     console.log(`I have a lapcar keyboard`)
// }
// keyboard()

// This is an emmediately function :

// (function keyboard() {
//     console.log(`I have a lapcar keyboard`)
// })()

// ()() => short 

// Together Immediately function :

// (function keyboard() {
    //  name IIFE 
//         console.log(`I have a lapcare keyboard`)
//     })();    
//             //  => coma is compulsory keep  this here 
//  ( () => {
        //  unname IIFE 
//   console.log(`I have a Dell moniter`)
//   })();
  
// (function mouse(name) {
//     console.log(`black mouse ${name}`)
// }) ("lapcare")



// function one() {
//     console.log("one")
// }
// function two() {
//     console.log("two")
// }
// function three() {
//     console.log("three")
// }
// one();
// two();
// three();






//************26 : Control flow in javascript******* */

// if :- Defination

// if(true){
                // => compulsory check
// }
//  or 
//  if(false){
                // => compulsory  not check
//  }


// const isLoggedIn = true
// if(isLoggedIn){
//     console.log(`user ${isLoggedIn}`)
// }


// comparision icon :- <,>,==,===,<=,>=,!=

// if(3 !=5) {
//     console.log(`This is not equal value`)
// }

// if(5==="5"){
//     console.log(`code did an exicute`)
// }

// if(5===5){
//     console.log(`code did an exicute`)
// }

// if(5 =="5"){
//     console.log(`code did an exicute`)
// }


// if( 6 !== 5){
//         console.log(`code did an exicute`)

// }


// if( 6 !== "5"){
//     console.log(`code did an exicute`)

// }


// if( 6 !== 6){
//     console.log(`code did an exicute`)

// }


// const score = 100
// if (score < 50) {
//     console.log(`this score is less than 100 ${score}`)
// }

// const score2 = 100
// if (score > 50) {
//     console.log(`this score is Greater than  ${score}`)
// }

// const score3 = 200
// if (score3 >= 100) {
//     console.log(`this score is Greater is equal to  ${score3}`)
// }

// const score3 = 200
// if (score3 <= 100) {
//     console.log(`this score is lessthan is equal to  ${score3}`)
// }


// const number = 500

// if(number > 200) {
//        var power = "fly"
//        console.log(`The power : ${power}`)
// }
// console.log(`use power : ${power}` )

// const number = 500

// if(number > 200) {
//        cosnt power = "fly"
//        console.log(`The power : ${power}`)
// }
// console.log(`use power : ${power}` )


// const balance = 1100
// if(balance>500 ) {console.log(`yes`)}


// const balance = 1100
// if(balance<500 ) {console.log(`yes`)}    => This is not redable code

// const balance = 1000

// if(balance<500){
//     console.log("less than 500 ")
// } else if (balance<900){
//     console.log("less than 900 ")
// } else if (balance<700){
//     console.log("less than 700 ")
// } else if (balance>1900){
//     console.log("less than 1900 ")
// } else if (balance>900){
//     console.log("less than 900 ")   => beacuse true condition 
// }else if (balance>2900){
//     console.log("less than 2900 ")
// }


// +++++ Use of && :-


// const username = "Faisal"
// const useremail = "Faisal65@sd.com"


// if(username && useremail && 2==2 ) {
// const useremail = "Faisal65@sd.com"
//     console.log(`give me username : ${username} and useremail : ${useremail}` )
//   }

  
// if(username && useremail && 2==3 ) {
//     const useremail = "Faisal65@sd.com"
//         console.log(`give me username : ${username} and useremail : ${useremail}` )
//       }

// if(username & useremail ) {
//   console.log("give me username" )    => no exicute beacuse there is singal & 
// }



// +++++ Use of || :-


// const useremail = "faisal4354@gmail.com"
// const username = "faisal"
// const userID = false


// if(userID || useremail || ) {
//     console.log("i am right")
// }


// if(userID && useremail) {
//     console.log("i am right")
// }



// ++++ Swich :- basic  syntext

// switch(key) {
//        case value:

//        break;


//     defualt:
//          break;
// 
// }

// const month = 4
// switch(month) {
//        case 1:
//          console.log("jan")
//           break;
//        case 2:
//          console.log("feb")
//           break;
//        case 3:
//          console.log("march")
//           break;
//        case 4:
//          console.log("apr")
//           break;
//        case 5:
//          console.log("may")
//           break;
       

// }

// const month = "may"
// switch(month) {
//        case "jan":
//          console.log(1)
//           break;
//        case "feb":
//          console.log(2)
//           break;
//        case "march":
//          console.log(3)
//           break;
//        case "apr":
//          console.log(4)
//           break;
//        case "may":
//          console.log(5)
//           break;
       

// }


// ++++++++ Truthy  and falsy Values +++++++ 

// const username  =  "Faisal" 
// const useremail = "faisal45@gmail.com"

// if(username) {
//     console.log(`username is ${username}`)

// } else if (useremail){
//     console.log(`useremail is ${useremail}`)

// }


// const username  =  "Faisal" 
// const useremail = "faisal45@gmail.com"

// if(username) {
//     console.log(`username is ${username}`)

// } else if (useremail){

// }
// console.log(`useremail is ${useremail}`)

 
 
// const username  =  "Faisal" 

// if(username) {
//     console.log(`username is ${username}`)

// } else {
// console.log(`useremail is ${useremail}`)
      
// }

 
 
// const username  =  ""    

// if(username) {
//     console.log(`username is ${username}`)

// } else {
//    console.log("useremail is not defined")
// }


 
 
// const username  =  ["Faisal" ]


// if(username) {
//     console.log(`username is ${username}`)

// } else{
//    console.log("useremail is not defined")
      
// }

 
// const username  =  [ ]


// if(username) {
//     console.log(`username is faisal`)

// } else{
//    console.log("useremail is not defined")
      
// }

 
 
//  Note: Rule of truhy and falsy value 

// Truthy Values : "0", "false", " ", [], {},function(){}

// Falsy values : false, 0, -0, BigInt On, "", null, undefined, NaN 



//**How to check empty Array */

// const username = []

// if(username.length === 0 ) {
//     console.log("Empty Array")
// }



//**How to check empty object */

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0 ) {
//     console.log("object is empty")
// }                   


// Nullish Coalescing Operator (??):null and undefined

// let val1;
// val1 = 5 ?? 8
// val1 = null ?? 10
// val1 = 54 ?? undefined
// val1 = 65 ?? 54 ?? 78

// console.log(val1)


//*****Terniary Operator *///


// condiiton ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80? console.log("less than 80") : console.log("more than 80")




// ****** Loop *****


