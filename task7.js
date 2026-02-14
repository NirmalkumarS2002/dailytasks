/*SECTION 1 – Date Object Tasks
TASK 1 – Custom Digital Clock
Create a live digital clock using:
- new Date()
- getHours()
- getMinutes()
- getSeconds()
- setInterval()
Format:
Current Time: 14 : 05 : 09
(Add leading zero if value < 10)
*/

setInterval(()=>{

    let getDate=new Date()

let hour=getDate.getHours()
let minutes=getDate.getMinutes()
let sec=getDate.getSeconds()

if(hour<10) hour= "0"+hour;
if(minutes<10) minutes="0"+minutes;
if(sec<10) sec="0"+sec;

console.log(`current Time : ${hour} : ${minutes} : ${sec}`)
   
},1000)

/*========================================================================

TASK 2 – Find Current Day Name
Use getDay()
Array:
["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
Print:
Today is Friday
*/

let clock=new Date()
 
let day=clock.getDay()

Array=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log('Today is',Array[day])

/* ========================================================================

TASK 3 – Age Calculator (Basic)
let birthYear = 2003
Use getFullYear()
Print:
Your age is 23*/

let clk=new Date()
let birthYear = 2003
let currentyear=clk.getFullYear()
console.log("Your age is ",currentyear-birthYear)

/* ========================================================================

TASK 4 – Create Specific Date
Create:
15 August 2020
10:30:45 AM
Using:
- new Date()
- setFullYear()
- setMonth()
- setDate()
- setHours()
- setMinutes()
- setSeconds()
Print using:
toLocaleString()*/


let specificdate=new Date()

//date
specificdate.setDate(15)
specificdate.setFullYear(2020)
specificdate.setMonth(7)

let dd=specificdate.getDate()
let yy=specificdate.getFullYear()
let mm=specificdate.getMonth()

Months=["january","febraury","march","april","may","june","july","augest","september","october","november","december"]
console.log(`${dd}`,Months[mm],`${yy}`)
 
//time
specificdate.setHours(10)
specificdate.setMinutes(30)
specificdate.setSeconds(45)

let hh=specificdate.getHours()
let MM=specificdate.getMinutes()
let ss=specificdate.getSeconds()

console.log(`${hh} : ${MM} : ${ss} AM`)

console.log(specificdate.toLocaleString())

/* ========================================================================

SECTION 2 – setTimeout & setInterval
TASK 5 – Delayed Message
Use setTimeout()
After 3 seconds print:
Welcome Naveen */

setTimeout(()=>{
    console.log('Welcome Naveen')
},3000)

/* ========================================================================

TASK 6 – Stop Interval After 5 Seconds
Output:
1
2
3
4
5
Stopped
Use:
- setInterval()
- clearInterval()*/
  
let count=1
let stopinterval=setInterval(()=>{
    console.log(count)
    count++

     if(count>5){
        clearInterval(stopinterval)
        console.log("Stopped")
     }
},1000)

/* ========================================================================

TASK 7 – Simple Promise
If number > 10 → resolve("Valid number")
Else → reject("Invalid number")
Handle using:
.then()
.catch()
.finally() */

function num(number){
    return new Promise((resolve,reject)=>{
        if(number>10){
            resolve("valid nubmer")
        }

        else{
            reject("invalid number")
        }
    })
}
num(42)

.then((result)=>{
    console.log(result)
})

.catch((error)=>{
    console.log(error)
})

.finally((pendingdata)=>{
    console.log('check completd')
})

/*  ========================================================================

TASK 8 – Fetch Product Prices
API:

Print only:
Product: <title>
Price: <price>*/

let api="https://fakestoreapi.com/products"

fetch(api).then((data)=>{
    return data.json()
})

.then((success)=>{
    success.forEach(element => {
        console.log("Tilte :",element.title)
        console.log("price:",element.price)
    });
    
})


/*  ========================================================================

SECTION 5 – Execution Order Task
function one(){
console.log("one");
}
function two(){
console.log("two");
}
function three(){
console.log("three");
}
one()
setTimeout(two,0)
three()
Predict Output and Explain Why*/

function one(){
console.log("one");
}
function two(){
console.log("two");
}
function three(){
console.log("three");
}
one()
setTimeout(two,0)
three()

//output is:

// one
// three
// two

// Functions one() and three() go directly to the call stack,
// so they execute immediately because they are synchronous functions.

// Function two() is asynchronous (setTimeout).It goes to the Web API, then to the callback queue.
// The event loop waits until the call stack is empty,and then moves it to the call stack.So it executes last.
