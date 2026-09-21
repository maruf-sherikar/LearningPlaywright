// (200).toString(); 
// true.toString();

// Number(400);


// Reverse String and Palindrome check

let str = "DAD".toUpperCase();

let rev = "";

for (let i = str.length-1; i>=0; i--){

    rev = rev + str[i];
    str.toLowerCase();
}

if(str === (rev)){
        console.log(rev  , " -> Yes it is");
    }else{
        console.log("No it is not palindrome");
    }


console.log(rev);
