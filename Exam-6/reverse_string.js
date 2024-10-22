let str="hello"
str=[...str]
console.log(str);

const reverse=(arr,n,i)=>{
   if(i==n){
    return
   }
   reverse(arr,n,i+1)
   console.log(arr[i]);
}
reverse(str,str.length,0)
