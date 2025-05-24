//let a = 10
//const b = 20
//var c = 30

let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30  //  function scope
    d = 40         //  block scope
    //console.log("Inner: ", a);  // 10
}


//console.log(a); // 300  
//console.log(b); // 20
//console.log(c);  // 30
//console.log(d);  // 40

function one(){
    const username = "Gdss"

    function two(){
        const website = "youtube"
        //console.log(username); // Gdss
    }
   // console.log(website); // ReferenceError: website is not defined
    two();
}
one(); // Gdss

if (true) {
    const username = "Gdss"
    if (username === "Gdss") {
        const website = "youtube"
        //console.log(username + website); // Gdssyoutube
    }
    // console.log(website); // ReferenceError: website is not defined
}

//console.log(username); // ReferenceError: username is not defined


//  **************  Intresting  **************

console.log(addone(5)) // 6
function addone(num) {
    return num + 1
    
}


addtwo(5) //  addtwo is hoisted, but not the function expression
const addtwo = function(num) {
    return num + 2
}



