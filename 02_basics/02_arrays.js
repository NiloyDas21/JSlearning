const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];

// arr1.push(arr2);
// console.log(arr1);

//OP is: [ 1, 2, 3, 4, [ 5, 6, 7, 8 ] ], which was not desired
//Instead use: concat -> but it returns a new array

// const combinedarr = arr1.concat(arr2);
// // const combinedarr = arr1+arr2;
// console.log(combinedarr)

//Using spread: which is highly preferred, if we want more than two arrays to merge

const arr3 = [9,10,11,12];
const combinedarr = [...arr1,...arr2,...arr3];
console.log(combinedarr);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)    //.flat(depth)
console.log(real_another_array);



console.log(Array.isArray("Niloy"))
console.log(Array.from("1234"))
console.log(Array.fromkeys({name: "hitesh"})) // we have to specify whether it is keys or values that we want to convert

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // .of(); returns an array from multiple entries