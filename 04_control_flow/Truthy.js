const userEMail = "Gdss.ai"

if (userEMail) {
    console.log(`User email is ${userEMail}`);
} else {
    console.log(`User email is not defined`);
}

// falsy value

// 0, "", null, undefined, NaN, bigint(0), 0n, false

// truthy value
// "0", " ", [], {}, true, 1, -1, 3.14, Infinity, -Infinity, bigint(1), 1n, "false", "true", "false", "null", "undefined", "NaN", "bigint(1)", "0n", function() {}, new Date(), Symbol("symbol"), BigInt(1), BigInt(0), BigInt(-1), BigInt(3.14), BigInt(Infinity), BigInt(-Infinity)

//if (userEMail.length === 0) {
//    console.log("array is empty");
//}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty");
}

// nullish coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = undefined ?? 10; // 10
val1 = null ?? 10 ?? 20; // 10


// ternary operator

// condition ? true : false

const iceTeaPrice = 1000
iceTeaPrice <=800 ? console.log("Less than 800") : console.log("More than 800");
  
 