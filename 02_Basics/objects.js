//  singleton


Object.create     //  constructor


//  object literal

const MySym = Symbol("Key1")


const JsUser = {
    name: "Gdss",
    "full name": "Godesss",
    [MySym]: "mykey1",
    age: 20,
    location: "Inore",
    email: "xyz@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday", "wednesday"],
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log( JsUser[MySym])

JsUser.email = "abcc@gmail.com"
//Object.freeze(JsUser) //  make the object immutable
JsUser.email = "123@gmail.com"
//console.log(JsUser);



//  Object.freeze()  //  make the object immutable
//  Object.seal()   //  make the object non extensible

//  Object.preventExtensions() //  make the object non extensible

JsUser.greeting = function () {
    console.log("Hello Js user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
//  Object.keys()  //  return the keys of the object    
//  Object.values()  //  return the values of the object
//  Object.entries()  //  return the entries of the object
//  Object.assign()  //  copy the values of all enumerable own properties from one or more source objects to a target object
