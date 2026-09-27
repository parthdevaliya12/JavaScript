function init() {
    let name = "Parth"
    function showName() {
        console.log(name);

    }
    showName()
}
init()


// function outer() {
//     let username = "Hello"
//     function inner() {
//         console.log("Inner : ",username);

//     }
//     inner()
// }
// outer()

function name() {
    const username = "Mozilla"
    function show() {
        console.log(username);

    }
    return show
}

const fun = name()
fun()


function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter();
counter();
counter();