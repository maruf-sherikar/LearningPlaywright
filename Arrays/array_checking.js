
let result  = Array.isArray([1,2,3]);
console.log(result);


[80,90,100].every(s=> s>50); //true

[20,90,10].some(s=> s>50); //true

[20,5,10].some(s=> s>50);  //false