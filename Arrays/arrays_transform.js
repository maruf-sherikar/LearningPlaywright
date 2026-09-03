let scores = [10, 20, 30, 40, 50];

let grades = scores.map(s => s > 30 ? "pass" : "fail");
console.log(grades);


// filer
let passed = scores.filter(s => s > 30);
console.log(passed);

