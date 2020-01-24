//variables
//let, const

// let age = 30;
// age = 32;
// console.log(age);


// const age = 30;
// //age = 32; //gives error... constant values can't be changed
// console.log(age);


//datatypes
//primitive data types.. strings, numbers, boolean, null, undefines

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof rating);


// const name = 'John';
// const age = 30;

// //concatenation
// console.log('My name is ' + name + ' and I am ' + age); //old way

// //Template String
// console.log(`My name is ${name} and I am ${age}`); //new way


//const s = 'Hello World';
//console.log(s.length);
//console.log(s.toUpperCase());
//console.log(s.toLowerCase());
//console.log(s.substring(0,4).toUpperCase());
//console.log(s.split(' '));


//Arrays 

// const fruits = ['apples', 'oranges', 'pears'];
// //console.log(fruits);
// fruits.push('grapes'); //adding at end of array
// fruits.unshift('strawberries'); //adding at front of array

// fruits.pop(); // deleting last one from array

// console.log(Array.isArray(fruits)); //checking if array or not
// console.log(Array.isArray('hello'));

// console.log(fruits);
// console.log(fruits.indexOf('oranges')); //index of 


//object literals

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies:['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     } 
// }

// // console.log(person.firstName, person.lastName);
// // console.log(person.hobbies[1]);
// // console.log(person.address.city);

// person.email = 'john@gmail.com';

// console.log(person);



// arrays of objects


// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appointment',
//         isCompleted: false
//     }
// ];

//console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


//Loops

//For

// for(let i = 0; i<=10; i++){
//     console.log(`for loop number ${i}`);
// }

// //While
// let i = 0;
// while(i<10){
//     console.log(`While loop number ${i}`);
//     i++;
    


// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appointment',
//         isCompleted: false
//     }
// ];

//forEach, map, filter

// todos.forEach(function(todo){
//     console.log(todo.text);
    
// });

// const todoText = todos.map(function(todo){
//     return todo.text;
    
// });
// console.log(todoText);


// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
    
// });
// console.log(todoCompleted);


//Chaining


// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
    
// }).map(function(todo){
//     return todo.text;
// });
// console.log(todoCompleted);



//Conditionals


// const x = 7;
// const y = 11;

// // if(x === 10){
// //     console.log('x is 10');
    
// //  } else if(x>10){
// //      console.log('x is greater than 10');
     
// //  } else{
// //     console.log('x is less than 10');
    
// // }

// if(x>5 && y>10){
//     console.log('x is greater than 5 and y is greater than 10');
    
// }


//Ternary Operator

// const x = 10;

// const color = x > 10 ? 'red' : 'blue';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
//         break;
        
// }



//Functions

// function addNums(num1 , num2){
//     return num1 + num2;
    
// }

// console.log(addNums(3,8));

// const addNums = (num1 , num2) => {
//     return num1 + num2;
    
// }

// console.log(addNums(4,8));


//Constructive Function

// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);

// }

// //creating prototype

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// //Instantiate object

// const person1 = new Person('John', 'Doe', '4-4-1990');
// const person2 = new Person('Rohn', 'Do', '4-3-1980');

// //console.log(person1);

// console.log(person2.getBirthYear());
// console.log(person1);


//Class

// class Person{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear(){
//         return this.dob.getFullYear();
//     }

//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }


// //Instantiate object

// const person1 = new Person('John', 'Doe', '4-4-1990');
// const person2 = new Person('Rohn', 'Do', '4-3-1980');



// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person2);