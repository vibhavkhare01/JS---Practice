//code execution + call stack

// in browser global execution context represents the window object


// in node global execution context represents the global object
// in browser global execution context is created when the script is loaded
// in node global execution context is created when the module is loaded
// global execution context is created when the script is loaded    

// global excution context 
// function execution context
// evaluation context

// firstly the global execution context is created



// memory creation phase
// in the global execution context, the code is executed line by line
// in the function execution context, the code is executed line by line 
// in the evaluation context, the code is executed line by line 
// 


// execution phase


let val1 = 10
let val2 = 5
function addnum(num1, num2) {
    let total = (num1 , num2)
    return total
}
let result1 = addnum(val1, val2)
let result2 = addnum(10, 2)

// in this 

// Global Execution Context
// this



// memory creation phase
// val1 -> undefined
// val2 -> undefined
// addnum -> function reference(definition)
// result1 -> undefined
// result2 -> undefined


//                cycle => 2

// execution phase
// val1 -> 10
// val2 -> 5
// addnum -> function reference(definition)
//                 |
//            new variable environment + execution thread



//*********  now again the execution phase starts for the function addnum


// memory creation phase
// num1 -> undefined
// num2 -> undefined
// total -> undefined

// execution phase
// num1 -> 10
// num2 -> 5
// total -> 15   & total is returned to the global execution context

// then new variable environment + execution thread is delete for addnum(result1)

//

// memory creation phase
// num1 -> undefined
// num2 -> undefined
// total -> undefined

// execution phase
// num1 -> 10
// num2 -> 2
// total -> 12   & total is returned to the global execution context



// ************  Call Stack ************


// Call Stack is a data structure that keeps track of the execution context
// Call Stack is a LIFO (Last In First Out) data structure
// Call Stack is used to keep track of the execution context
// Call Stack is used to keep track of the function calls
// Call Stack is used to keep track of the function execution

function one() {
    console.log("one")
    two()
}
function two() {
    console.log("two")
    three()
}
function three() {
    console.log("three")
}

// if we call one() then the call stack will look like this
// Call Stack
// one()
// two()
// three()
// and the output will be
// one
// two
// three
// if we call two() then the call stack will look like this
// Call Stack
// two()
// three()
// and the output will be
// two
// three
// if we call three() then the call stack will look like this
// Call Stack
// three()
// and the output will be
// three
