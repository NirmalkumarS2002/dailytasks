//1
let num=prompt("enter the Number:")
if(10<=num && 50>=num){
    console.log(`${num} is valid Number`)
}
else{
    console.log(`${num} is in valid number`)
}


//2
let userid=prompt('enter user name:')
let userpw=prompt('enter user Password:')
let username='admin'
let password='1234'
if(userid==username && userpw==password){
    console.log('successfully you are login')
}
else{
    console.log('try agian')
}

//3
let N=prompt('enter the number:');
(N%2==0)?console.log(`${N} is even`):console.log(`${N} is odd`);

4
console.log((10 === "10") || (5 > 2) && !(3 < 1));
/*
(10==='10') is  true
(5>2) is        true
!(3<1)          fasle == !(false)  is true

So the expression becomes:
true || true && true == true
*/

//5
console.log( "5"+2 );  // "52"
console.log("5"-2);    // 3
console.log("5"*2);    // 10
console.log("5"/2);    // 2.5

// //6
let value='100';
console.log(Number(value));     // This will convert the string "100" to the number 100.
console.log(Boolean(value));    // This will convert the string "100" to the boolean value true
                             
//7
console.log(Boolean(""));  // This will convert the empty string "" to the boolean value false
console.log(Boolean(" ")); // This will convert the string " " (a space) to the boolean value true             
console.log(Boolean(0));   // This will convert the number 0 to the boolean value false
console.log(Boolean([]));  // This will convert an empty array [] to the boolean value true

//8
let mark=prompt('enter your mark:')
if(mark>=90){
    console.log('Grade A')
}
else if(mark>=75 && mark<90){
    console.log('Grade B')
}
else if(mark>=50 && mark<75){
    console.log('Grade C')
}
else{
    console.log('Fail')
}

// //9
let signal=prompt("enter the color:")
switch(signal){
case'red':console.log('stop');break;
case'yellow':console.log('ready to go');break;
case'green':console.log('you can go');break;
default:console.log('plese enter corretly!')
}

//10
let age=prompt('enter the age:')
let height=prompt('enter the height:')
let weight=prompt('enter the weight:')
if(age>=18){
    if(height>=160){
        if(weight>=50){
            console.log('you are eligible!')
        }
        else{
            console.log(`your are weight is ${weight} is less`)
        }
    }
    else{
            console.log(`your are height is ${height} is less`)
        }
    }
else{
    console.log(`your are age is ${age} less`)
}

//11
for(let a=1;a<=20;a++){
    console.log(a)
}

//12
for(let a=1;a<=20;a++){
    if(a%2==1){
        console.log(a)
    }
}

//13
let i=10;
while(i>=1){
    console.log(i)
    i--
}

//14
let j=1;
do{
    console.log(j)
    j++
}while(j<=5)

//15
let word = "STACKLY";
for(let w of word){
    console.log(w)
}

//16

let student = {
    name: "Arun",
    course: "MERN",
    duration: "6 months"
}
for(let obj in student){
    console.log(obj, student[obj])
}


// //RT 1
let Userid=prompt('enter user name:')
let Userpw=prompt('enter user Password:')
let Username='admin'
let Password=1234;
(Userid==Username && Userpw==Password)?console.log('login successfully!'):console.log("Invalid Credentials");

// RT 2
let salary=prompt("enter the salary:")
let exp=prompt('enter the experience:')
if(salary > 50000 && exp > 3){
    console.log('Eligible for bonus')
}
else{
    console.log('not eligible')
}

//RT 3

let cart_amount=prompt('enter the cart amount:')
if(cart_amount>=5000){
    console.log('20% discount')
}

else if(cart_amount>=2000 && cart_amount<5000){
    console.log('10% discount')
}
else{
    console.log('No discount')
}

//RT 4
let odd=0; 
for(let n=1;n<50;n++){
    if(n%2==1){
        odd++;       
    }
}
console.log('Total odd numbers between 1 to 50 is :',odd)



//RT 5
let hour=prompt('enter the hour:')
if(hour>=1 && hour<=6){
    console.log('Good morning')
}
else if(hour>=7 && hour<=12){
    console.log('morning')
}
else if(hour>=13 && hour<=16){
    console.log('Good afternoon')
}
else if(hour>=17 && hour<=19){
    console.log('Good evening')
}
else{
    console.log('Good Night')

}
