 let arr=[1,2,3,4,5]
 let target=5;
 let i=0;
 let j=arr.length-1;
 let max=0;
 const largest=(arr,target)=>{
    while(i<j){
      
        if(arr[i]>max){
            i++
            console.log(arr[i]);
        }
        
        else{
            j--
            console.log(arr[j]);
        }
     }
     return max
 }
 
 console.log(largest(arr,target))