
let arr = [10, 20, 30, 40, 50, 100]
let min = arr[0];
const findmax = () => {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min;
}

console.log(findmax(arr));