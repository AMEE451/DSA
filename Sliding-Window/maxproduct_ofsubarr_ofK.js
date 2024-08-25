let arr = [1, 3, 2, 6, -1, 4]
let k = 3
let cursum = 0;
let maxsum = 0;
const product = (arr) => {
    let product = 1;
    for (let i = 0; i < k; i++) {
        product *= arr[i]
    }
    return product
}

for (let i = 0; i < arr.length; i++) {
    let subarray = [];
    for (let j = i; j < arr.length; j++) {
        subarray.push(arr[j]);
        if (subarray.length == k) {
            cursum = product(subarray);
            console.log(subarray, cursum);
            maxsum = Math.max(maxsum, cursum);
        }
    }
}

console.log(maxsum);


// const sum=(arr)=>{
//     let sum=1;
//     for(let i=0;i<arr.length;i++){
//         sum*=arr[i];
//     }
//     return sum;
// }

// let arr=[1,2,3,4,5,6];
// let k=3;
// let crsum=0;
// let maxsum=0;

