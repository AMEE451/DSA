 let arr="Nayan"
 let i=0;
 let j=arr.length-1;
 arr=arr.toLowerCase()

 const palindrome=(arr)=>{
    while(i<j){
        if(arr[i]==arr[j]){
            i++;
            j--;
        }
        else{
            return false
        }
    }
    return true
 }
 console.log(palindrome(arr));