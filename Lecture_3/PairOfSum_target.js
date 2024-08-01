 
 let arr=[1,2,3,4,5]
 let target=6;
 let i=0;
 let j=arr.length-1;

 while(i<j){
    let sum=arr[i]+arr[j]
    if(sum<target){
        arr[i,j]
        i++
    }
    // else if(sum<target){
    //     i++
    // }
    else{
        j--
    }
    return arr
 }
 console.log(arr);