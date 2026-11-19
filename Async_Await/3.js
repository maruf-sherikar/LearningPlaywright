 async function getTestResults(){
    return "pass";
 }


 getTestResults().then(function(result){
    console.log(result);
 });




 async function runTest(){


    let result = await Promise.resolve("Login test is passed");
    console.log(result);

    let result2 = await Promise.resolve("Dashboard test passed");
    console.log(result2);
 }

 


 