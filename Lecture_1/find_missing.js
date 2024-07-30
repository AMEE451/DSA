
let arr = [1, 2, 4, 5, 6]

// let sum = 0
// for (let i = 1; i <= arr.length+1; i++) {
//     sum += i
// }
let n = arr.length + 1; 
let sum = (n * (n + 1)) / 2;

let arrsum = 0
for (let i = 0; i < arr.length; i++) {
    arrsum += arr[i]
}

let missing = sum - arrsum
console.log(missing);