function openBrowser(){
    return new Promise(function(resolve){
        resolve("Browser is opened");
    })
}


function goToLogin(){
    return new Promise(function(resolve){
        resolve("Login page is loaded");
    })
}

function enterCredentials(){
    return new Promise(function(resolve){
        resolve("Credentials entered");
    })
}

function clickLogin(){
    return new Promise(function(resolve){
        resolve("Login button clicked");
    })
}




async function runTCLoginFlow(){

    let msg1 = await openBrowser();
    console.log("Step 1: ", msg1);

    let msg2 = await goToLogin();
    console.log("Step 2: ", msg2);

    let msg3 = await enterCredentials();
    console.log("Step 3: ", msg3);

    let msg4 = await clickLogin();
    console.log("Step 4: ", msg4);
}