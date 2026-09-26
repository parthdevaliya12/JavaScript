function one(){
    const name = "Parth"
    function two(){
        const website = "youtube"
        console.log(name);
    }
    // console.log(website);
    
    two()    
}

one()

if(true){
    const name = "Parth"
    if(name === "Parth"){
        const website = " Youtube"
        console.log(name + website);
        
    } 
}

// console.log(name);

console.log("---------------------------------------")

//hoisting
console.log(addone(10)); 
function addone(num){
    return num + 1
}


console.log(addtwo(5));
const addtwo = function(num) {
    return num + 2 
}

