var myPet ={

    name: "Rex",
    species: "Dog",
    legs: 4,
    friends: ["John", "Mark"]
};

function myFunction(myObj){

    return myObj;
}

console.log(myFunction(myPet));

module.exports = { myPet, myFunction};

