//Task2

//1
prompt('what is your name?')
alert('Welcome to  javaScript Traning')
console.log('Welcome to javascript traning')

//2
console.log(500)
console.warn(500)
console.error(500)
console.clear()

//3

let num=5;
let name='nirmal'
let value=true;
let char;
var nam=null;
console.log(num)
console.log(typeof num)

console.log(name)
console.log(typeof name)

console.log(value)
console.log(typeof value)

console.log(typeof char)

console.log(nam)
console.log(typeof nam)


//4
let a=20;
let b=5;
console.log('Addition is :',a+b)
console.log('Subracation is :',a-b)
console.log('multiplication is :',a*b)
console.log('division is :',a/b)
console.log('modulas is :',a%b)
console.log('explontial is :',a**b)

//5
let c=13;
let d=c++;
console.log('post-increment :',c)

let e=13;
let f=++e;
console.log('pre-increment :',e)


let g=13;
let h=g--;
console.log('post-decrement :',h)


let i=13;
let j=--i;
console.log("post-decrement :",j)

//6
let number=10;
number += 5;
console.log("ans is += :", number);

number -= 3;
console.log("ans is -= :", number);

number *= 2;
console.log("ans is *= :", number);

number /= 4;
console.log("ans is /= :", number);

number %= 3;
console.log("ans is %= :", number);

//7

let sub=['html','css','javascript','react']
console.log(sub[0])
console.log(sub[1])
console.log(sub[sub.length-1])
console .log(sub)

//8
let fruits=['apple','orange','mango']
fruits.push('goya','seetha')
fruits.pop()
console.log(fruits)

//9
let student={
    name:'nirmal',
    age:24,
    course:'fed',
    city:'karur'
}

console.log(student.name)
console.log(student.age)
console.log(student.course)
console.log(student.city)

//10
let company={
    companyname:'imerit',
    trainer:{name:'logesh', sub:'js'}
}
console.log(company.companyname)
console.log(company.trainer.name)
console.log(company.trainer.sub)