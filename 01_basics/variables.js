const id = 234;
let name = "Das";
var add = "Bengaluru";
let accountState; //no initialised, so undefined


console.log(id);
console.log(name);
console.log(add);

/*let is block-scoped, meaning it only exists within the nearest pair of curly braces {}
whereas var is function scoped. So avoid using var
Symbol: Unique and immutable primitive value, often used as anonymous object keys.
*/
console.table([id,name,add,accountState])

let pId = Symbol("id");
console.log(pId)

console.log(undefined);  //O/P is undefined
console.log(null)        //O/P is object

// An object is a non-primitive datatype that stores data as a collection of key-value pairs