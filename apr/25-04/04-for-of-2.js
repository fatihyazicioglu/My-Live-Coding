const students = [
  {
    name: "Martha",
    age: 23,
    averageResults: 8,
  },
  {
    name: "Steven",
    age: 28,
    averageResults: 9,
  },
  {
    name: "Francis",
    age: 32,
    averageResults: 5,
  },
  {
    name: "Mark",
    age: 21,
    averageResults: 10,
  },
];

for (let xyz of students) {
  console.log(xyz);
}

// // show only students that are older than 25
// console.log("\n\nStudents older than 25:\n");
//  for (let eachStudent of students) {
//    if (eachStudent.age > 25) {
//      console.log(eachStudent);
//    }
//  }

 console.log("\n\nStudents older than 25:\n");

for (let x of students){
if (x.age>25){
  console.log(x);
}
}

// // only students with an average above 7
// console.log("\n\nStudents with average above 7:\n");

// for (let eachStudent of students) {
//   if (eachStudent.averageResults > 7) {
//     console.log(eachStudent);
//   }
// }
console.log("\n\nStudents with average above 7:\n");

for(let student of students){
  if(student.averageResults>7){
    console.log(student);
  }

}

// // students whose name starts with letter "m"

// console.log("\n\nStudents with names that start with letter m:\n");
// for (let eachStudent of students) {
//   if (eachStudent.name.toLowerCase().startsWith("m")) {
//     console.log(eachStudent);
//   }
// }

console.log("\n\nStudents with names that start with letter m:\n");
for (let student of students){
  if (student.name.toLowerCase().startsWith("m")){
    console.log(student);
  }
}
console.log("\n\n123\n");

function studentsByAverage(array, average) {
  const result = [];
  for (let eachStudent of array) {
    if (eachStudent.averageResults > average) {
      result.push(eachStudent);
    }
  }
  return result;
}

console.log(studentsByAverage(students, 7));
console.log(studentsByAverage(students, 9));
console.log(studentsByAverage(students, 8));
