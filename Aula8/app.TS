function Logger(constructor: Function){
    console.log("Logging...");
    console.log(constructor)
}

@Logger 
class person {
    name = 'Julio'

    constructor(){
        console.log('Creating person Object')
    }
}

const pers = new person()

console.log(pers) // Output: Julio