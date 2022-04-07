// let greeting1 = greetUser("pluto");
// let greeting2 = greetUser ("mickey");
// let greeting3 = greetUser();

// console.log(greeting1);
// // console.log(greeting2);
// // console.log(greeting3);

// // const greetUserV2 = function

const customGreeting = function (greeting = "hello", userName = "guest"){
    return `${greeting} ${userName}`;
};
let customGreeting1 = customGreeting ("hi","joseph");
let customGreeting2 = customGreeting ("hallo", "josephine");
let customGreeting3 = customGreeting ("hey");
let customGreeting4 = customGreeting(undefined, "carlo", false);

console.log(customGreeting1);
console.log(customGreeting2);
console.log(customGreeting3);
console.log(customGreeting4);

function myConsoleLog(){
    console.log(parameter1,parameter2);
}

myConsoleLog("hey",123,"bla", true, false, [1,1,2,3,]);
console.log();