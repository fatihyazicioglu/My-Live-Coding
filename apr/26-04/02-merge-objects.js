/**
 * Object.assign()
 *
 */

let person = {
  firstName: "Sylvia",
  age: 28,
};

let address = {
  street: "Blablastraße",
  number: 21,
  city: "Berlin",
};
let merged = Object.assign(person, address)
// let's merge the 2 objects above into a new one

let idCard = Object.assign(person, address);

console.log(idCard, merged);

let x = { a: 1, b: 2 };
let y = { a: 99, c: 3 , b:3};
 
let mergedOne = Object.assign(x,y)
let z = Object.assign(y, x);

console.log(z);
console.log(mergedOne);