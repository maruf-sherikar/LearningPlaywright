class car{

    //Default Constructor
    // constructor(){
    //     console.log("I am default Constructor");
    // }



    // Parameterized Constructor
    constructor(assigned_name){
        this.name = assigned_name;
    }
}


let honda_city = new car("City");
let honda_amaze = new car("Amaze");
console.log(honda_city.name);
console.log(honda_amaze.name);