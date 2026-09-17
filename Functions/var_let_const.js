var a = 10;
console.log(a);
// var - It is function scoped, Traitor




// Define a function
function printHello(){
    console.log("Hello");
    var a = 20;
    console.log(a);

    if(true){
        var a = 30;
        console.log(a);
    }
    console.log(a);
}

printHello();

console.log("---------------");

// let - Block scoped
let b = 20;
console.log(b);


function printHelloLet(){
    console.log("Let Hello");
    let b = 30;
    console.log(b);

    if(true){
        let b = 40;
        console.log(b);
    }
    console.log("let -> b ",b);
}


// Calling the function
printHelloLet();



// Const

const pi = 3.14;
console.log(pi);



