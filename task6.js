/*SECTION 1 – Array Higher Order Methods Tasks

Task 1 – forEach() Practice
let subjects = ["Maths", "Science", "English", "History"]
Requirements:
• Use forEach()
• Print Subject 1: Maths ... Subject 4: History
• Store result in a variable
• Question: Why does forEach() return undefined?*/

let subjects = ["Maths", "Science", "English", "History"]
let foreach=subjects.forEach((c,i,t)=>{    
   console.log(`Subject ${i+1}:`,c)
})

// Why does forEach() return undefined?*/
// Because forEach() is designed only to execute code, not to return a new value.
 

//=======================================================

// Task 2 – map() Practice
// let prices = [100, 200, 300, 400]
// Requirements:
// • Use map()
// • Add 10% GST
// • Return new array
// • Expected Output: [110, 220, 330, 440]

let prices = [100, 200, 300, 400]
let Map=prices.map((c,i,t)=>{
    return((c/100)*10 +c)
})
console.log('ADD 1O% GST ',Map)

//=======================================================

/*
Task 3 – filter() Practice
let students = [
{ name: "A", marks: 45 },
{ name: "B", marks: 75 },
{ name: "C", marks: 35 },
{ name: "D", marks: 85 }
]
Requirements:
• Use filter()
• Get students scoring above 50
• Print filtered array
*/

let students = [
{ name: "A", marks: 45 },
{ name: "B", marks: 75 },
{ name: "C", marks: 35 },
{ name: "D", marks: 85 }
]

let filter=students.filter((c,i,t)=>{
    return c.marks>50

})
console.log("filtered array :",filter)

//=======================================================

/*
Task 4 – find() Practice
Use same students array
Requirements:
• Use find()
• Find first student scoring above 50
• Print that object
• Question: Difference between filter() and find()?*/

let find=students.find((c,i,t)=>{
    return c.marks>50
})
console.log(find)

//Difference between filter() and find()?
//   filter() returns all elements that satisfy the condition as an array.
//   find() returns only the first matching element and stops execution.

//=======================================================

/*
Task 5 – reduce() Practice
let cart = [
{ item: "Shirt", price: 1000 },
{ item: "Shoes", price: 2000 },
{ item: "Watch", price: 3000 }
]
Requirements:
• Use reduce()
• Calculate total price
• Bonus: Add 5% tax inside reduce()*/

let cart = [
{ item: "Shirt", price: 1000 },
{ item: "Shoes", price: 2000 },
{ item: "Watch", price: 3000 }
]

let reduce=cart.reduce((acc,c,i,t)=>{
    return acc+c.price
},0)
console.log("Total price :",reduce)
console.log("5% tax with pirce :",(reduce/100)*5+reduce)

//=======================================================

/*
Task 6 – some() Practice
let numbers = [1, 3, 5, 7, 8]
Requirement:
• Check if at least one number is even
• Output: true
 */

let numbers = [1, 3, 5, 7, 8]
let som=numbers.some((c,i,t)=>{
    return c%2==0
})
console.log(som)

//=======================================================

/*
Task 7 – every() Practice
let ages = [22, 25, 19, 30]
Requirement:
• Check if all ages are above 18 */

let ages = [22, 25, 19, 30]
let newever= ages.every(c=>c>18);
console.log(newever)

//=======================================================

 /*
Task 8 – sort() Practice
let salaries = [50000, 10000, 70000, 30000]
Requirements:
• Sort ascending
• Sort descending
• Explain why normal sort() fails for numbers
*/

let salaries = [50000, 10000, 70000, 30000]
let newsort=salaries.sort((a,b)=>a-b);
console.log('Ascending sort:',newsort)

let newsortt=salaries.sort((a,b)=>b-a);
console.log('Descending sort:',newsortt)

// Explain why normal sort() fails for numbers
//    Because JavaScript default sort() converts numbers into strings and sorts them alphabetically.

//=======================================================

/*
Task 9 – Array Conversion Methods
let arr = [10, 20, 30, 40]
Requirements:
• Convert using toString()
• Convert using join("-")
• Expected Output: 10-20-30-40*/

let arr = [10, 20, 30, 40]
let tostrr=arr.toString()
console.log(tostrr)

let joinn=arr.join('-')
console.log(joinn)

//=======================================================

/*
Task 10 – charAt() & charCodeAt()
let word = "Developer"
Requirements:
• Get character at index 4
• Get ASCII value of character at index 4
*/

let word = "Developer"
let getindex=word.charAt(4)
console.log(getindex)

let getAcscii=word.charCodeAt(4)
console.log(getAcscii)

//=======================================================

/*
Task 11 – slice()
let company = "StacklyCompany"
Extract: Company */

let company = "StacklyCompany"
let newsilce=company.slice(7,15)
console.log(newsilce)

//=======================================================
/*
Task 12 – Case Conversion
let userInput = "javaScript"
• Convert to uppercase
• Convert to lowercase*/

let userInput = "javaScript"
let conupper=userInput.toLocaleUpperCase()
console.log(conupper)

let conlower=userInput.toLocaleLowerCase()
console.log(conlower)

//=======================================================
/*
Task 13 – trim()
let email = " naveen@gmail.com "
Remove unwanted spaces*/

let email = " naveen@gmail.com "
let trim=email.trim()
console.log(trim)

//=======================================================

/*Task 14 – includes()
let message = "Welcome to JavaScript Training"
Check if "JavaScript" exists*/

let message = "Welcome to JavaScript Training"
let check=message.includes('JavaScript')
console.log(check)

//=======================================================

/*Task 15 – split()
let movie = "spider-man-no-way-home"
Convert into array*/

let movie = "spider-man-no-way-home"
let split=movie.split("-")
console.log(split)

//=======================================================

/*Task 16 – indexOf() & lastIndexOf()
let text = "programming"
• Find first index of 'm'
• Find last index of 'm'*/

let text = "programming"
let firstIndex=text.indexOf('m')
console.log(firstIndex)

let lastIndex=text.lastIndexOf('m')
console.log(lastIndex)


//=======================================================

/*Task 17 – replace()
let tech = "I love python"
Replace python with javascript*/

let tech = "I love python"
let replace=tech.replace('python','javascript')
console.log(replace)

//=======================================================

/*Task 18 – startsWith() & endsWith()
let filename = "report.pdf"
• Check if starts with "report"
• Check if ends with ".pdf"*/

let filename = "report.pdf"
let start=filename.startsWith('report')
console.log(start)

let end=filename.endsWith(".pdf")
console.log(end)

//=======================================================
/*
Task 19 – repeat()
let star = "*"
Print 10 stars using repeat()*/

let star = "*"
let repeat=star.repeat(10)
console.log(repeat)

//=======================================================
/*
FINAL TEAM CHALLENGE – Employee Report System
let employees = [
{ name: "Naveen", salary: 50000 },
{ name: "Arun", salary: 30000 },
{ name: "Kiran", salary: 70000 }
]
Requirements:
• Convert names to uppercase using map()
• Filter salary > 40000
• Find first salary > 60000
• Calculate total salary using reduce()
• Sort salaries descending */

let employees = [
{ name: "Naveen", salary: 50000 },
{ name: "Arun", salary: 30000 },
{ name: "Kiran", salary: 70000 }
]

//• Convert names to uppercase using map()
let upperNames=employees.map(emp =>({
  ...emp,
  name: emp.name.toUpperCase()
}));

console.log(upperNames);

// Filter salary > 40000
let FilterSalary=employees.filter((c,i,t)=>{
    return c.salary>40000
})
console.log(FilterSalary)


//Find first salary > 60000
let FindSalary=employees.find((c,i,t)=>{
    return c.salary>60000
})
console.log(FindSalary)

//Calculate total salary using reduce()
let totalSalary=employees.reduce((acc,c,i,t)=>{
    return acc+c.salary
},0)
console.log(totalSalary)

//Sort salaries descending
let sorted = employees.sort((a, b) => {
    return b.salary - a.salary
});
console.log(sorted);

