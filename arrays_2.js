const one = ["Apple", "Banana", "Cherry"];
const two = ["Date", "Elderberry", "Fig"];


const combined = one.concat(two);
console.log(combined); //output: [ 'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig' ]

//spread operator
const arr = [...one,...two]
console.log(arr);


const newArr = [1,2,3,[4,5,6],7,[8,9,[10,11,12]]];
const flatArr = newArr.flat(Infinity);
console.log(flatArr); //output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

console.log(Array.isArray("Parth")); //output: false
console.log(Array.from("Parth")); //output: [ 'P', 'a', 'r', 't', 'h' ]
