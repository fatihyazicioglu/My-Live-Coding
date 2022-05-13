let person = {
  name: "Tim",
  age: 28,
};

let personCopy = Object.assign({}, person);

console.log(personCopy === person);


console.log(personCopy, person);
console.log(typeof personCopy);
console.log(typeof person);
