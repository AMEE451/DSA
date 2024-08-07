let arr = [1, 4, 3, 5]
let sum = 0;
const SumOfArr = (arr) => {
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum 
}
console.log(SumOfArr(arr));

let max = 0;
for (let i = 0; i < arr.length; i++) {
    let subarr = []
    for (let j = i; j < arr.length; j++) {
        subarr.push(arr[j])
        let currsum = SumOfArr(subarr)
        if (currsum > max) {
            max = currsum;
        }
    }
}
console.log(max);

