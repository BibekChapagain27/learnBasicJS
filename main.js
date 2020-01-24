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

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies:['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    } 
}

// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

person.email = 'john@gmail.com';

console.log(person);

