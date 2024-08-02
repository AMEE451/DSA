 
 let arr=[1,2,3,4,5,3,1]
 let target=6;
 
 arr.sort()
 
 const merge=(arr,target)=>{
    let i=0;
    let j=arr.length-1;
    let newarr=[]
    let count=0
 
    while(i<j){
        let sum=arr[i]+arr[j]
        if(sum<target){
            for (let i=0;i<=j;i++) {
            newarr.push(arr[i,j])
            count++;
            i++
            }
        }
        else{
            j--
        }
        
     }
     return count
 }
 
console.log(merge(arr,target));