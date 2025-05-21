//const tinderUser = new Object()  // singleton
const tinderUser = {}  //non singleton


tinderUser.id = "123ab"
tinderUser.name = "Gdss"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "avb@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Godess",
            lastName: "Ji"
        }
    }

}

console.log(regularUser.fullname);


const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} //  spread operator
console.log(obj3);

const user =[
    {
        id: 1,
        email: "121@gmail.com"
    }, {
        id: 1,
        email: "121@gmail.com"
    }, {
        id: 1,
        email: "121@gmail.com"
    }, {
        id: 1,
        email: "121@gmail.com"
    }, {
        id: 1,
        email: "121@gmail.com"
    },
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

course.courseInstructor

const {courseInstructor: instrutor} = course

console.log(instrutor);

//{
    //"name": "Godess",
    //"coursename": "js in hindi",
    //"price": "free"
//}

[
    {},
    {},
    {}    
]

