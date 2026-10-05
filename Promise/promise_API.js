let apiCall = new Promise(function(resolve, reject){

    resolve ({status: 200, message: "API call success"});
});

apiCall.then(function(response){
    console.log(response);
    console.log(response.status);
    console.log(response.body);
})