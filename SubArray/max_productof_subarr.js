let arr = [1, 4, 3, 5]
const SumOfArr = (arr) => {
    let mul = 1;
    for (let i = 0; i < arr.length; i++) {
        mul *= arr[i]
    }
    return mul 
}

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

