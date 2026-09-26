//const
const accountID = 1234567890;

//let
let accountName = "John Doe";

//var
var accountBalance = 1000;

//undefined
let accountType;

//null
var accountStatus = null;

console.log(accountID); // Output: 1234567890
console.log(accountName); // Output: John Doe
console.log(accountBalance); // Output: 1000

// accountID = 9876543210; // This will throw an error because accountID is a constant

accountName = "Jane Smith"; // This is allowed because accountName is declared with let
accountBalance = 2000; // This is allowed because accountBalance is declared with var
console.log(accountName); // Output: Jane Smith
console.log(accountBalance); // Output: 2000


console.table([accountID, accountName, accountBalance, accountType,accountStatus]);


console.log(accountType);
