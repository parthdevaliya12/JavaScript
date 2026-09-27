const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 1");
        resolve()
    }, 1000);
})

promiseOne.then(() => {
    console.log("Promise 1 consumed");

})


const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
})

promiseTwo.then(() => {
    console.log("Promise 2  consumed");

})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Async task 2");
        resolve({ name: "Parth", email: "parth@gmail.com" })
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);

})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "Parth", password: "!!@#" })
        } else {
            reject('Something wrong...')
        }
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
    return user.username
}).then((user) => {
    console.log(user);
}).catch((error) => {
    console.log(error);

})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "John" })
        } else {
            reject('Error...')
        }
    }, 1000);
})

async function consumePromise() {
    try {
        const res = await promiseFive
        console.log(res);

    } catch (error) {
        console.log(error)
    }


}

consumePromise()