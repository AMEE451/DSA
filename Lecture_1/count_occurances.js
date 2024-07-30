
let arr=[1,3,2,3,4,3,5,3]
let target=3
let count=0;

const countoccurance=(arr)=>{
    for(let i=0;i<=arr.length;i++){
        if(arr[i]==target){
            count++;
        }
    }
    return count;
}
console.log(countoccurance(arr));