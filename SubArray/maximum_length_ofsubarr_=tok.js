
let arr = [1, 2, 3, -5, -1, 3]
let k = 5
const findsum = (arr) => {
    let sum = 0;
    for (let ele of arr) {
        sum += ele
    }
    // console.log(sum);
}
findsum(arr);


let maxlength = 0;
const length = (arr) => {
    for (let i=0; i < arr.length; i++) {
        let subarr = [];
        for (let j = i; j < arr.length; j++) {
            subarr.push(arr[j])
            let currsum = findsum(subarr)
            if (currsum == k) {
                let currlength = subarr.length
                if (currlength > maxlength) {
                    maxlength = currlength;
                }
            }
            console.log(subarr);
            
        }
    }
}
length(arr)
console.log(maxlength);
