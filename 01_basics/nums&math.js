const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));            // .toFixed(n) gets us till which decimal place we want the value i.e. : n

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));                   //<-- study this

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));             //commas are provided 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));     //abs means Mod
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


//Math.random() gives values in range: 0-1
// 0 <= random() < 1

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)