const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]


//filter
const filter = arr.filter((f) => f > 50)
// console.log(filter);


// const newArr = []

// arr.forEach((num) => {
//     if (num > 50) {
//         newArr.push(num)
//     }
// })

// console.log(newArr);


//map
const map = arr.map((num) => num * 2)
console.log(map);


//reduce
const reduce = arr.reduce((num, val) => {
    console.log(num," ",val);
    return num + val
}, 0)
console.log(reduce);




