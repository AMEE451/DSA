
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const SumOfArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum 
}

let max = 0;
let startidx = 0;
let endidx = 0;

for (let i = 0; i < arr.length; i++) {
    let subarr = []
    for (let j = i; j < arr.length; j++) {
        subarr.push(arr[j])
        let currsum = SumOfArr(subarr)
        if (currsum > max) {
            max = currsum;
            startidx = i;
            endidx = j;
        }
    }
}
console.log(`Subarray indices: [${startidx}, ${endidx}]`);
