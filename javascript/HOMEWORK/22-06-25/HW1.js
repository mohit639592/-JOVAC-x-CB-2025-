// HW1 MAKE A ARRAY OBJECT DATA OF 20 PEOPLE AND TRY DIFFERENT OPERATIONS BY MAP FILTER REDUCE


// HERE IS 20 USERS DATA CREAYED BY CHATGPT
const people = [
    { firstName: "Mohit", lastName: "Sharma", age: 22, salary: 40000 },
    { firstName: "Aman", lastName: "Verma", age: 25, salary: 45000 },
    { firstName: "Rahul", lastName: "Gupta", age: 30, salary: 50000 },
    { firstName: "Neha", lastName: "Singh", age: 28, salary: 47000 },
    { firstName: "Simran", lastName: "Kaur", age: 26, salary: 43000 },
    { firstName: "Pooja", lastName: "Mishra", age: 24, salary: 41000 },
    { firstName: "Ankit", lastName: "Chopra", age: 29, salary: 46000 },
    { firstName: "Rohit", lastName: "Yadav", age: 31, salary: 52000 },
    { firstName: "Deepak", lastName: "Rajput", age: 27, salary: 44000 },
    { firstName: "Meena", lastName: "Devi", age: 23, salary: 39000 },
    { firstName: "Sneha", lastName: "Patel", age: 25, salary: 45000 },
    { firstName: "Jatin", lastName: "Mehra", age: 32, salary: 55000 },
    { firstName: "Komal", lastName: "Kapoor", age: 29, salary: 47000 },
    { firstName: "Varun", lastName: "Seth", age: 33, salary: 53000 },
    { firstName: "Nidhi", lastName: "Agarwal", age: 26, salary: 42000 },
    { firstName: "Tarun", lastName: "Kumar", age: 28, salary: 46000 },
    { firstName: "Rajesh", lastName: "Malhotra", age: 35, salary: 60000 },
    { firstName: "Kavita", lastName: "Bhardwaj", age: 30, salary: 49000 },
    { firstName: "Yash", lastName: "Arora", age: 24, salary: 41000 },
    { firstName: "Preeti", lastName: "Shah", age: 27, salary: 44000 }
  ];
  
  //DIFFERENT OPERATIONS ON DATA CREATED BY MOHITSHARMA NOT CHATGPT

  //1 DISPLAY THE USER NAME
const name = people.map(people=>people.firstName +" "+people.lastName);
console.log(name);

//2  DISPLAY THE AVERAGE OF AGE 
const agesum = people.reduce(function(acc,curr){
    acc = acc+curr.age;
    return acc;
},0);
var avg = agesum/people.length;
console.log(avg);

//3 FIND EXPERIENCE PEOPLE
const exp = people.filter(people => people.age>25);     //IT IS DISPLAY ALL DETAILS WHICH HAVE AGE IS > 25
console.log(exp);

//4 FIND EXPERIENCE PEOPLE ONLY NAME
const exp2=[];
people.filter(function(people){
    if(people.age>25) exp2.push(people.firstName);
})
console.log(exp2);


//5 FIND TOTAL SALARAY
const salaray = people.reduce( function(acc,curr){
    acc = acc+curr.salary;
    return acc;
},0)
console.log(salaray);

//6 DISPLAY THE NAME OF PERSON AND AGE WHOSE SALARY IS > 30000
const maxsalary=[];
 people.filter(function(people){
    if(people.salary>30000) maxsalary.push(people.firstName +" "+people.lastName+ " "+ people.salary);
});
console.log(maxsalary);