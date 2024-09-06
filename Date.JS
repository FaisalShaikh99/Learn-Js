////////////**********Date and time***********///////////// */

// const x = new Date();
// console.log(x.getDate());                            //Date          

// const y = new Date();
// console.log(y.getFullYear());                      //year

// const z = new Date();   
// console.log(z.getDay());                         //day
  
// const a = new Date();
// console.log(a.getMonth());                     //Month   

// const b = new Date();
// console.log(b.getHours());                   //Hours 
   
// const c = new Date();
// console.log(c.getMinutes());               //Minuts

// const d = new Date();
// console.log(d.getSeconds());              // seconds

// const d =  new Date()
// console.log(d.getTime());                   // Time




// Using new Date():

// const a = new Date();
// console.log(a);;                     // Output: 2024-09-02T13:09:34.042Z

// const a = new Date("2-9-2024")
// console.log(a);                     //Output: 2024-09-01T18:30:00.000Z

// const a = new Date("2024-9-2") 
// console.log(a);                        //Output: 2024-09-01T18:30:00.000Z






//**Note */

// There are 9 ways to create a new date object:

// new Date()
// new Date(date string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)




// new Date(date string):

// const d = new Date("October 13, 2014 11:13:00")
// console.log(d);

// const d = new Date("2022-03-25");
// console.log(d);


// new Date(year,months,day,hour,minute,seconde,milisecond)

// const dt = new Date(2024,9,2,18,47,27,)
// console.log(dt);




// Date methods++++++++++++

// => toString()
// => toDatestring()
// => toUTCStirng()
// => toISOString()

// tostring 

// const a = new Date()
// console.log(a.toString());                    //output : Mon Sep 02 2024 21:06:30 GMT+0530 (India Standard Time)


// The toDateString() method converts a date to a more readable format:

// const b = new Date();
// console.log(b.toDateString());


// The toUTCString() method converts a date to a string using the UTC standard:

// const b = new Date();
// console.log(b.toUTCString());                    //output: Mon, 02 Sep 2024 15:40:25 GMT

// toISOstring():

// const b = new Date();
// console.log(b.toISOString());                        //output: 2024-09-02T15:42:38.140


// const date = Date.parse('2/9/2024')
// console.log(date);



//***Date now method */

// const d = Date.now();
// console.log(d);



//*******************Date set method************///////// */


// Note : // set methods are same as get methods 

// setfullyear()

// const y = new Date()
// console.log(d.setFullYear(2024, 9, 3));


// const m = new Date()
// console.log(m.setMonth(9));

// const d = new Date()
// console.log(d.getDate() + 50);

// const h = new Date()
// console.log(h.setHours(6));

// const m = new Date()
// console.log(h.setMinutes(45));

// const sh = new Date()
// console.log(h.setSeconds(23));

// const ms = new Date()
// console.log(h.setMilliseconds());

// const t = new Date()
// console.log(h.setTime());
