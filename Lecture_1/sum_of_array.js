
let arr = [1, 2, 3, 4, 5]
let sum = 0;

const arraysum = (arr) => {
    for (let i = 0; i <= arr.length; i++) {
        sum = sum + i;
    }
    return sum
}

console.log(arraysum(arr));