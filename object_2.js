

const user = {}

user.name = "John Doe";
user.age = 30;
user.location = "New York";
user.course = "JavaScript";
user.isLoggedIn = true;
user.lastLogin = ["Monday", "Tuesday", "Wednesday"];


const newUser = {
    email: "john.doe@example.com",
    fullname: {
        username: {
            firstname: "John",
            lastname: "Doe"
        }


    }
}

// console.log(newUser.fullname.username.firstname); //output: John

const obj1 = {1: "one", 2: "two", 3: "three"};
const obj2 = {4: "four", 5: "five", 6: "six"};

// const mergedObj = {obj1,obj2};
// const mergedObj = Object.assign({}, obj1, obj2);  
// console.log(mergedObj); //output: { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }


// const mergedObj = {...obj1, ...obj2};
// console.log(mergedObj); //output: { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }

const obj = [
    {
        1: "one",
        2: "two",
        3: "three"
    },
    {
        4: "four",
        5: "five",
        6: "six"
    },
    {
        7: "seven",
        8: "eight",
        9: "nine"
    }
]

// console.log(obj[0][1]);

console.log("------------------------");

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('name'));
