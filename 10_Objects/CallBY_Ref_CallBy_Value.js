let a = 10;
let b = a;
b = 99;
console.log(a); // Call By Value


// Call By Reference
let obj1 = {value:10};
let obj2 = obj1;
obj1.value = 99;

console.log(obj1.value);