// singleton
// Object.create

// Object creation using Object literals syntax
const user = {
  name: "Das",
  age: 22,
  greet: function() {
    console.log(`Hello, I'm ${this.name}`);                //"this" keyword is used to access a property within the same object
   },
//   can also be written as
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};



const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",             //define symbol only like this, using []
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])              //JsUser."full name"  <- not allowed, compulsory to use []
// console.log(JsUser[mySym])                    //same in the case of Symbols, dont use "."

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                       //No changes after freeze is available
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());