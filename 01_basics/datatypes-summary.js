/*Datatypes in JS are of two types- based on how they are kept in memory and accessed
1.Primitive
2.Non - primitive - arrays,objects,functions

Primitive values are immutable(cannot be altered) and passed by value.
Non-primitive values are mutable and passed by reference.

JS is dynamically typed languaged
In JavaScript, variable types are determined at runtime, not ahead of time (at compile time).

a Symbol is a primitive data type used primarily to create guaranteed unique identifiers for object properties.
*/


const id = Symbol("123")
const anotherId = Symbol("123");

//But both are different

console.log(id === anotherId)


//Arrays, Objects and Functions

const arr =[1,2,3,4,5];

let myObj = {
    name:"Niloy",
    age:22,
    degree:"Btech"
}

let myFunc = function(){
    console.log("Hello world")
}
console.log(typeof arr)

//For non-primitive data types return type is always an object, expect for functions it is object-function

//Stack memory is used for primitive datatypes
//Heap memory is used for non-primitive datatypes