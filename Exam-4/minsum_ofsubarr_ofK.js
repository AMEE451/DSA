let arr = [1, 2, 3, 4, 5, 6];
let cursum = 0;
let minsum = 0;
let k = 3;

for (let i = 0; i < k; i++) {
    cursum += arr[i];
}

minsum = cursum;

for (let i = k; i < arr.length; i++) {
    cursum += arr[i];
    cursum -= arr[i - k];
    minsum
    minsum=Math.min(minsum,cursum)
}

console.log(minsum);