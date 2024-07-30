
let arr = [10, 20, 30, 40, 50, 100]
let max = 0
const findmax = () => {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(findmax(arr));