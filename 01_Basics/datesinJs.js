//  Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString);
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate.toDateString());

let myTimesStamp = Date.now()

console.log(myTimesStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(DataTransfer.now()/1000));

let newDate = Date()
console.log(newDate)
console.log(newDate.getMonth());
console.log(newDate.getDay());


//  `${newDAte.getDay()} and time`


newDate.toLocaleString('default',{
    weekDay: "long",
    
})




