let fruits = ["mango", "banana", "apple"];
console.log(fruits.sort());

let score = [4,3,2,1,0];
console.log(score.sort());



let nums = [10,1,2,21];
nums.sort();
console.log(nums); // Natural sort order (lexicographical order)

// proper sorting Asc, Desc
nums.sort((a,b) => a-b);
console.log(nums);
nums.reverse();
console.log(nums);


