const score = 400

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);

//  toString().length for calculate lenght of string


console.log(balance.toFixed(2));

//  toFixed for fixed strings length


const otherNumber = 23.04949

console.log(otherNumber.toPrecision(3));

// Precision for round figure

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'))

// 'en-In For convert in indian currency writing



//                Maths 

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,6,4,8,3,2));
console.log(Math.max(49,5,5,6,2));


console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
