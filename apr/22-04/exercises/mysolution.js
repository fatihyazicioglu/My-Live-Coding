//01

const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 }
console.log(student);
    
delete student.rollno

console.log(student);

//02
let movie ={
    title:"the Magic Dragon",
    duration:" 30 minutes",
    stars:["Puff","jackie","Thor"]
}

console.log(`I watched ${movie.title} lasts ${movie.duration}. The starts are ${movie.stars}`);

//03
let eShop = [
    {
        name:"shirt",
        price:"10",
    },
    {
        name:"skirt",
        price:"3",
    },
    {
        name:"pullover",
        price:"4",
    },
    {
        name:"shoes",
        price:"6",
    },
    {
        name:"jeans",
        price:"8",
    },
    {
        name:"hat",
        price:"8",
    },
    {
        name:"",
        price:"",
    },
    {
        name:"",
        price:"",
    },
    {
        name:"",
        price:"",
    },
    {
        name:"",
        price:"",
    },
];

let cards =[
    {
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    {
        user: "ahmad",
        product: "t-shirt",
        quantity: 9
    },
    {
        user: "fatih",
        product: "watch",
        quantity: 7
    },
    {
        user: "anwar",
        product: "shoes",
        quantity: 3
    },
    {
        user: "serao",
        product: "pullover",
        quantity: 3
    },
    {
        user: "jack",
        product: "glasses",
        quantity: 3
    },
    {
        user: "col",
        product: "Hat",
        quantity: 3
    },
    {
        user: "mikael",
        product: "necklace",
        quantity: 3
    },
    {
        user: "kaan",
        product: "jacket",
        quantity: 3
    },
    {
        user: "gaze",
        product: "socks",
        quantity: 3
    },
]

//A
function addProductToCart(item){
    cards.push(item)
}

addProductToCart({user: "new",
product: "product1",
quantity: 3})

console.log(cards);

//B
let givenUser =(pro) =>{
for (let i = 0; i < cards.length; i++) {
    if (cards[i].user===pro) {
        console.log(`The products that ${pro} has :}`,cards[i].product);
    }
    
}
}
givenUser("anwar")


//C
let givenUserItems =(it) =>{
let total = 0
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].user===it) {
            total +=cards[i].quantity
        }
        
    }
    console.log(total);
}
    givenUserItems("col")



    //D
    