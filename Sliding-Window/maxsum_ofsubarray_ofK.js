let arr = [1, 3,-1, 6, 2, 4]
let k = 3
let cursum = 0;
let maxsum = 0;
for (let i = 0; i < k; i++) {
    cursum += arr[i]
}
maxsum = cursum
for (let i = k; i < arr.length; i++) {
    cursum += arr[i]
    cursum -= arr[i-k]
    if(cursum>maxsum){
        maxsum=cursum
    }
    // maxsum=Math.max(maxsum,cursum)
}
console.log(maxsum);
