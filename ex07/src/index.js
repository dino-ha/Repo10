function myFunction(par){

    const lion = {

        "name": "Simba",
        "legs": 4,
        "tails": 1, 
        "roar": "roar-roar"
    };

    delete lion[par];
    return lion;
}

myFunction("roar");

module.exports = { lion, myFunction };

