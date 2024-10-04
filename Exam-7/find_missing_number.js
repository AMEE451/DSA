let arr=[3,0,1,5,2]
let sum=0
let summ=arr.length

for(let i=0;i<arr.length;i++){
    sum+=arr[i]
    summ+=i
}
let result=summ-sum
console.log(result);
