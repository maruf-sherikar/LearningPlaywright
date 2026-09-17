function add (a, b, c){
    return a + b + c;
}

let num = [1,2,3,4,];
console.log(add(...num));


// 

function getStatus(code){
    if(code >=200 && code < 300) return "Success"; 
    if(code>=400 && code <500) return "Client Error";
    if(code >=500) return "Server Error";
}

getStatus(200);
getStatus(400);
getStatus(500);



function logTest(name){
    console.log(`Running: ${name}`);
    // no return statement, so it will return undefined

}

logTest("Test 1, logTest function");
