let browsers = ["Chrome", "edge", "brave", "opera"];

console.log(browsers.length);

for(let i = 0; i<browsers.length; i++){
    console.log(browsers[i]);
    if(browsers[i] === "opera"){
        console.log("opera doesnot support automation now");
    }
}