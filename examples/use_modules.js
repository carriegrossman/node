// const {add,subtract} = require("./math");

// let value = add(1,2);
// console.log(value);

// let subVal = subtract(3,5);
// console.log(subVal)

//mult example


const {mult} = require("./math");
let value = mult(process.argv[2], process.argv[3])
console.log(value)