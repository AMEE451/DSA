
let arr=[2,3,1,4,5]

const checksort=()=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            return false
        }
    }
    return true
}
console.log(checksort(arr));