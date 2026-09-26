
const sym = Symbol('sym');


//object literal
const person = {
    name: 'John',
    age: 30,
    [sym]: "Hello",
    location: 'New York',
    course: 'JavaScript',
    isloggedin: true,
    lastLogin: ["monday", "tuesday", "wednesday"],

}

// console.log(person.name);
// console.log(person.age);
// console.log(person.location);
// console.log(person.course);
// console.log(person.isloggedin);
// console.log(person.lastLogin);
// console.log(typeof person[sym]);

// person.name = "Parth";
// Object.freeze(person); //freeze the object
// person.name = "Alice"; //this will not work as the object is frozen
// console.log(person); //output: Parth

person.greeting = function() {
    console.log("Hello,JS" ,  this.name);
}

console.log(person.greeting());
