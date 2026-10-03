//Defining objects using constructors or singleton

function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("Alice", 30);
const user2 = new User("Bob", 25);
// console.log(user1)



const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {                             //object inside object
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);               //<-- can be accessed like this

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)           //{} confirms that all objects combine and form a final object which is stored in {}, also called the target

//Using spread
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));                  //returns an array of keys
console.log(Object.values(tinderUser));                //returns an array of values

console.log(Object.entries(tinderUser));               //returns an array of key-value pairs

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //returns boolean value on whether that property exists or not



//Object de-structuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor     <-- objects can be accessed like this, but there's another approach: object destructuring

const {courseInstructor: instructor} = course         //instructor is an alias name         

// console.log(courseInstructor);
console.log(instructor);


//API structure - APIs is stored in form of JSON objects - {}

//APIs transmit data over HTTP as a JSON-formatted string (plain text).

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//Also array of objects can be returned instead of only objects

[
    {},
    {},
    {}
]