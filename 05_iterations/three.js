// For of

// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greeting = "Hello, World!";
for (const greet of greeting) {
    console.log(`Each char is ${greet}`)
}
   

//   Maps

const map = new Map()
map.set('In', "India")
map.set('Us', "United States")
map.set('Uk', "United Kingdom")
map.set('In', "India") // This will overwrite the previous 'IN' entry

// console.log(map); 

for (const[key, value] of map) {
    console.log(key, ':', value);

}


const myObject ={
    'game1' : 'Cricket',
    'game2' : 'Football'
}

//for (const [key, value] of myObject) {
//    console.log(key, ':', value); // This will not work as myObject is not iterable
// }
    