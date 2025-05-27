// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
  //  console.log("5 is best number");
  }
  //console.log(element);  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  
  
}

//console.log(element);  // ReferenceError: element is not defined outside the loop

for (let i = 1; i <= 10; i++) {
//  console.log(`Outer loop value: ${i}`);
  
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and outer loop value ${i}`);
  //console.log(i + '*' + j + ' = ' + i*j);

  }
}

let myArray = ["apple", "banana", "cherry"];
//console.log(myArray.length);  // 3

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
//  console.log(element);  // apple, banana, cherry
  
} 

// 

//for (let index = 0; index < myArray.length; index++) {
//  if (index == 5) {
//    console.log("5 is best number");
//    break
//  }
//  console.log(`Value of i is ${index}`);

//}


for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue
  }
  console.log(`Value of i is ${index}`);

}
