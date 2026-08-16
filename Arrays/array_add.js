
let arr = [1, 2, 3, 4, 5];
arr.push(6); // adds 6 to the end of the array
console.log(arr);


arr.pop(); // removes the last element from the array
console.log(arr);

arr.unshift(0); // adds 0 to the beginning of the array
console.log(arr);

arr.shift(); // removes the first element from the array
console.log(arr);

arr.splice(2, 1); // removes 1 element at index 2 and adds 99
console.log(arr);


arr.splice(2, 0, 99, 100); // adds 99 at index 2 without removing any elements
console.log(arr);

arr.splice(2, 1, 909, 101); // removes 1 element at index 2 and adds 909 and 101
console.log(arr);



