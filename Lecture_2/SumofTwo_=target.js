
let arr=[1,2,3,4,5,6]
let target=11;
let i=0;
let j=arr.length-1

const SumofTwo=(arr,target)=>{
  while(i<j){
    if(arr[i]+arr[j]==target){
        return [i,j]
    }
    else if(arr[i]<arr[j]){
        i++
    }
    else{
        j--
    }
  }
  return -1 -1
}
console.log(SumofTwo(arr,target));