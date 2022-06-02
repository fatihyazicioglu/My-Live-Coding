document.write ("<div>this is js div </div>");
document.write("<div> </div>")

//step a
const newElement = document.createElement("h1");

//step b
const nodeText = document.createTextNode("Welcome to my page-TO DO LIST");

//step c
newElement.appendChild(nodeText);
document.body.appendChild(newElement);
//console.log(newElement);

const arr = [];
const addToList = (e)=>{
    e.preventDefault();
    console.log(e);
}