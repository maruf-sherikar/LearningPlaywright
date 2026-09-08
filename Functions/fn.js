
let score = 87;
let result = score>=50 ? "pass" : "Fail";
console.log(result);



//Define
function getResult(score){
    return score>=50 ? "pass" : "fail";
}


//calling
getResult(87); //pass
getResult(45); //fail