//const coding = ["js", "py", "rb", "java"];


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item 
// })

// console.log(values); 

// for each didnot return anything, it just iterates through the array
// so we can use it to perform side effects like logging


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNums.filter( (num) => num > 4 )

//const newNums = myNums.filter( (num) => {
//    return num > 4
//})


const newNums = []

//myNums.forEach( (num) => {
//    if (num > 4) {
//        newNums.push(num)
//    }
//})
console.log(newNums); // [5, 6, 7, 8, 9, 10]


const books = [
    { title: "Book 1", genre: "History", publish: 1981, edition: 2004 },
    { title: "Book 2", genre: "Science", publish: 1999, edition: 2010 },
    { title: "Book 3", genre: "Fiction", publish: 2005, edition: 2015 },
    { title: "Book 4", genre: "History", publish: 2010, edition: 2020 },
    { title: "Book 5", genre: "Science", publish: 2015, edition: 2021 },
    { title: "Book 6", genre: "Fiction", publish: 2020, edition: 2022 },
    { title: "Book 7", genre: "History", publish: 2021, edition: 2023 },
    { title: "Book 8", genre: "Science", publish: 2022, edition: 2024 },
    { title: "Book 9", genre: "Fiction", publish: 2023, edition: 2025 },
    { title: "Book 10", genre: "History", publish: 2024, edition: 2026 }
];

let userbooks  = books.filter( (bk) => bk.genre === "History"  )

userbooks = books.filter( (bk) => {return bk.publish >= 2000 } )
console.log(userbooks); 
