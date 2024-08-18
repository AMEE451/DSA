
let arr = [1, -1, 5, -2, 3]
let k = 3
const SumOfArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

let min = arr.length;

for (let i = 0; i < arr.length; i++) {
    let subarr = []
    for (let j = i; j < arr.length; j++) {
        subarr.push(arr[j])
        let currsum = SumOfArr(subarr)

        if (currsum == k) {
            let currlen = subarr.length
            if (currlen < min) {
                min = currlen;
                console.log(subarr);
            }
        }
    }
}
console.log(min);
