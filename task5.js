/*TASK 1 – Employee Merge System (Spread Operator)
You have:
let empBasic = { name: "Naveen", role: "Trainee", salary: 20000 }
let empPromotion = { role: "Developer", bonus: 10000 }
Requirements:
1. Merge both objects using spread.
2. Update salary to 40000.
3. Add new property: experience: "2 years"
4. Print final employee object.*/

let empBasic = { name: "Naveen", role: "Trainee", salary: 20000 }
let empPromotion = { role: "Developer", bonus: 10000 }

//Merge 
merge={...empBasic,...empPromotion}
console.log(merge)

//salary update
update={...merge,salary:4000}
console.log(update)

//Add new property: experience: "2 years"
add={
  experience:'2 years'
}
final={...update,...add}  

//Print final employeeobject.
console.log('final employee object :',final)

/*

------------------------------------------------------------
TASK 2 – Shopping Cart (Spread + Array)
let cart1 = ["Shoes", "Shirt"]
let cart2 = ["Watch", "Cap"]
Requirements:
1. Merge both carts.
2. Add "Bag" at the end.
3. Add "Socks" at the beginning.
4. Print final cart.
*/

let cart1 = ["Shoes", "Shirt"]
let cart2 = ["Watch", "Cap"]

//Merge both carts.
let mergecart=[...cart1,...cart2]
console.log(mergecart)

//Add "Bag" at the end.
mergecart.push('Bag')


//Add "Socks" at the beginning.
mergecart.unshift('Socks')

//Print final cart.
console.log('final cart:',mergecart)

/*
------------------------------------------------------------
TASK 3 – Rest Operator Salary Calculator
Create function:
calculateTotalSalary(baseSalary, ...bonuses)
Requirements:
1. Add all bonus values.
2. Return total salary.
3. Example:
calculateTotalSalary(30000, 2000, 3000, 5000)
Expected Output: Total Salary: 40000 */

function calculateTotalSalary(baseSalary, ...bonuses){

  let [bonus1,bonus2,bonus3]=bonuses  
  addbonus=bonus1+bonus2+bonus3 //Add all bonus values.

  return totalsalary=baseSalary+addbonus

}
calculateTotalSalary(30000, 2000, 3000, 5000)

// Return total salary.
console.log('total salary is :',totalsalary)

/*
------------------------------------------------------------
TASK 4 – Advanced Destructuring
let student = {
name: "Rahul",
marks: { maths: 90, science: 85, english: 88 }
}
Requirements:
1. Destructure name.

2. Destructure maths and science.
3. Print:
Rahul scored 90 in maths and 85 in science */

let student = {
name: "Rahul",
marks: { maths: 90, science: 85, english: 88 }
}
//Destructure name.
let {name}=student;
console.log(name)

//Destructure maths and science.
let {marks}=student;
console.log(marks)
let {maths,science,english}=marks

//Print:
console.log(`Rahul scored ${maths} in maths and ${science} in science`)

/*------------------------------------------------------------
TASK 5 – Array Manipulation
let numbers = [10,20,30,40,50]
Requirements:
1. Remove 30 using splice.
2. Add 25 in its place.
3. Reverse array.
4. Check if 50 exists.
5. Print final array.*/

let numbers = [10,20,30,40,50]
//Remove 30 using splice.
numbers.splice(2,1)
console.log(numbers)

//Add 25 in its place.
numbers.splice(2,0,25)
console.log(numbers)

//Reverse array.
let revese=numbers.reverse()
console.log('reverse array:',revese)

//Check if 50 exists.
console.log('check if 50 is exists :',revese.includes(50))

//Print final array.
console.log('final array:',revese)

/*-----------------------------------------------------------
TASK 6 – Flatten Data
let apiData = [1,2,[3,4,[5,6,[7,8]]]]
Requirements:
1. Convert into single array.
2. Print output.
3. Find index of 6.*/

let apiData = [1,2,[3,4,[5,6,[7,8]]]]

//Convert into single array.
let flat=apiData.flat(Infinity)

//Print output.
console.log("single array :",flat)

//Find index of 6

let findindex=flat.indexOf(6)
console.log('index of 6 is :',findindex)

 /*------------------------------------------------------------
BONUS HARD TASK – Team Level
let users = [
{name: "A", salary: 20000},
{name: "B", salary: 40000},
{name: "C", salary: 30000}
]
Requirements:
1. Increase everyone salary by 5000 using spread.
2. Return new updated array.
3. Sort based on salary (high to low).*/

let users = [
{name: "A", salary: 20000},
{name: "B", salary: 40000},
{name: "C", salary: 30000}
]

let updatedUsers = users.map(user => ({
  ...user,
  salary: user.salary + 5000
}));

updatedUsers.sort((a, b) => b.salary - a.salary);
console.log(updatedUsers);


 