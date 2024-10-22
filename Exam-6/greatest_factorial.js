
let arr=[3, 5, 7, 1, 9]
arr.sort((a,b)=>a-b)
console.log(arr);
let product=1
for(let i=0;i<arr.length;i++){
    product=arr[i]*arr[i-1]
}
console.log(product);
