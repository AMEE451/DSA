let arr=[4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
let cursum=0;
let maxsum=0;
let k=3;

for(let i=0;i<k;i++){
    cursum+=arr[i];
}

maxsum=cursum;

for(let i=k;i<arr.length;i++){
    cursum+=arr[i];
    cursum-=arr[i-k];
    if(cursum<maxsum){
        maxsum=cursum
    }
    // maxsum=Math.min(maxsum,cursum)
}

console.log(maxsum);