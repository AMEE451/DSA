
let arr = [1, 2, 3, 4, 5, 6]
let target = 8
let i = 0;
let j = arr.length;

const pairs = (arr) => {
    let result = [];

    while (i < j) {
        if (arr[i] + arr[j] == target) {
            result.push([arr[i],arr[j]])
            i++
            j--
        }
        else if (arr[i]+arr[j]<target) {
            i++
        }
        else {
            j--
        }
    }
    return result
}
console.log(pairs(arr, target));
