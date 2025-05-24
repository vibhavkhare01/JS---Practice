const user = {
    username: 'Gdss',
    price: 999,

    welcomeMessage: function() {
        //console.log(`${this.username} , welcome to the website!`);
        //console.log(this);
        
    }

}    
   
//user.welcomeMessage(); // Gdss , welcome to the website!
//user.username = 'Gdss2'
//user.welcomeMessage(); // Gdss2 , welcome to the website!

// console.log(this);

//function chai(){
//    let username = 'Gdss'
//    console.log(this.username); // undefined
//    console.log(this); // Window object in browser or global object in Node.js
//}


const chai = () => {
    let username = "Gdss"
    //console.log(this.username); // undefined
    
}


//chai(); // undefined

//const addtwo = (num1, num2)  => {
//    return num1 + num2;
//}

//const addtwo = (num1, num2) => num1 + num2 

//const addtwo = (num1, num2) => ( num1 + num2 ) 

const addtwo = (num1, num2) => ({username: "Gdss"})




console.log(addtwo(5, 10)); 


//const myArray = [2, 5, 3, 7, 8]

//myArray.forEach()