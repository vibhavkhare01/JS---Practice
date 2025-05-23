//let a = 10
//const b = 20
//var c = 30

let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30  //  function scope
    d = 40         //  block scope
    console.log("Inner: ", a);  // 10
}


console.log(a); // 300  
//console.log(b); // 20
//console.log(c);  // 30
//console.log(d);  // 40