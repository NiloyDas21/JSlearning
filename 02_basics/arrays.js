//Array is an object

// const arr = [1,2,"niloy", 1.22, true];
// console.log(arr[3]);

//1.data types can be mixed.
//2.resizable.
//3.Here indexing is 0-based.
//4.when copied, only shallow copy is created - i.e. they share the same reference point.
//hence changed made in any one of them is reflected in both

//another way of defining
// const myarr = new Array(1,2,3,4)
// myarr.push(5);
// console.log(myarr)

// myarr.pop();
// console.log(myarr);

// myarr.unshift(9);     //.unshift(val) is used to insert value from front of the array
// console.log(myarr);
// myarr.shift();
// console.log(myarr)

// slice, splice

const myArr = new Array(0,1,2,3,4,5,6)
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)    //[1,2,3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)   //[1,2,3] but here original array myArr is altered
console.log("C ", myArr);
console.log(myn2);