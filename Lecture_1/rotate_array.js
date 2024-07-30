
let arr = [2, 3, 4, 6, 5, 7, 9]
let positions = 2

let n = arr.length;
let number = n - positions;

let rotated = arr.slice(number);
let remaining = arr.slice(0, number);

let rotatedArray = rotated.concat(remaining);

console.log(rotatedArray);