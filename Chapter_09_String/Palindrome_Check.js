let str = "mom".toLowerCase();

let rev = "";

for(let i = str.length-1; i>=0;i--){

    rev = rev + str[i];
}
    if(str === rev){
        console.log("It is plaindrome");
    }else{
        console.log("Not palindrome");
 }



// let str = "mom".toLowerCase();
// let rev = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
// }

// if (str === rev) {
//     console.log("It is palindrome");
// } else {
//     console.log("Not palindrome");
// }