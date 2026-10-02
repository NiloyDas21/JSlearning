console.log(2>1)
console.log("2">1); //"2" -> 2, i.e. string to int conversion is done first and then checked

//Avoid the kind of checks done below
console.log(null>0)
console.log(null == 0)
console.log(null>=0);

// Under the specification rules for ==:
// null and undefined are equal only to each other (and themselves).
// null does not convert to 0 when evaluated with ==.

console.log(null == undefined)