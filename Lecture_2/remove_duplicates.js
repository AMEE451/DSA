
let arr=[1,3,2,3,4,3,1,5,1]
arr.sort()
let i=0;
let j=arr.length-1;
console.log(arr);

const remove=(arr)=>{
    while(i<j){
        if(arr[i]==arr[i+1]){
          arr.splice(i,1)
        }
        else if(arr[i]<arr[j]){
            i++
        }
        else{
            j--
        }
    }
    return arr
}
console.log(remove(arr));
