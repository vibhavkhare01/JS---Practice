// if


const isUserLoggedIn = true
const temperature = 41

if ( temprature === 40 ) {
  console.log("less than 50");
  
} else {
console.log("temperature is greater than 50");
}
console.log("Executed");


// <, >, <=, >=, ==, ===, !=, !==, &&, ||, !, ?:

//const score = 200

//if (score > 100) {
//  const power = "fly"
//  console.log(`User power: ${power}`);
//}

//console.log(`User power: ${power}`); // ReferenceError: power is not defined

const balance = 1000
//if (balance > 500) console.log("test"),console.log("test2"),console.log("test3");


if (balance < 500) {
  console.log("less than 500");

} else if (balance < 750) {
  console.log("less than 750");

} else if (balance < 900) {
  console.log("less than 1000");

} else {
  console.log("greater than 1200");

}


const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserLoggedIn && debitCard && 2==3) {
  console.log("User can make a purchase");

}

if ( loggedInFromGoogle || loggedInFromEmail) {
  console.log("User can logged in");

}

