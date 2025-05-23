function sayMyName(){
    console.log("G");
    console.log("o");
    console.log("d");
    console.log("e");   
    console.log("s");
    console.log("s");
}


// sayMyName()

function addTwoNumbers(num1, num2){
    //console.log(num1 + num2);
    //let result = num1 + num2
    //return result
    return num1 + num2
}

addTwoNumbers(2, 3)  // 5
addTwoNumbers(2, "3")  // 23
addTwoNumbers(2, "a")  // NaN
addTwoNumbers(2, null)  //


const result = addTwoNumbers(2, 3)

//console.log("result: ", result); // undefined

function loginUserMessage(userName){               //(username = abc) 
    if(userName === undefined){                       //(!username)
        console.log("Please provide a username");
        return
    }
   return `${userName} just logged in`
}

//console.log(loggedInUserMessage ("Godeess"))
//console.log(loginUserMessage())



function calculateCartPrice(...num1){
    return num1 
}

//console.log(calculateCartPrice(200, 400, 500))


const user = {
    name: "Godeess",
    price: 199
}

function handleObject(anyobject){
    console.log(`User name is ${anyobject.name} and price is ${anyobject.price}`);
 }

 //handleObject(user)
// handleObject({name: "Godeess", price: 199})

handleObject({
    name: "Gdss",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([200, 400, 100, 600])); // 400