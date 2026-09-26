const user = {
    username: "Parth",
    age: 22,
    welcomeMessage: function () {
        console.log(`Welcome to my code ${this.username}`);
        // console.log(this);

    }
}

// user.welcomeMessage()
// user.username = "John"
// user.welcomeMessage()

// console.log(this);


// function data(){
//     console.log(this);
// }
// data()

const add = (n1, n2) => n1 + n2;
console.log(add(3, 5));


const show = () => ({ name: "Hello" })
console.log(show());


const arr = [2, 2, 4, 5, 5, 8, 3]

arr.forEach((n) => {
    console.log(n);
})

