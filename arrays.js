//array
const arr = [1, 2, 3, 4, 5];
// console.log(arr[0]);

const arr2 = new Array(6, 7, 8, 9, 10);
// console.log(arr2[0]);

//Array methods

// arr.push(6);
// arr.pop()

// arr.unshift(8)
// arr.shift()

// console.log(arr.includes(9));
// console.log(arr.indexOf(5));


const newArr = arr.join()
// console.log(newArr);

//slice and splice 

//original array
console.log("A",arr); //output: A [ 1, 2, 3, 4, 5 ]

//slice
const newArr2 = arr.slice(1, 3);
console.log(newArr2); 
console.log("B",arr); //output: B [ 1, 2, 3, 4, 5 ]

//splice
const newArr3 = arr.splice(1, 3);
console.log(newArr3); 
console.log("C",arr); //output: C [ 1, 5 ]
