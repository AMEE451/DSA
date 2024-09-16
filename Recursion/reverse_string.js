let str="hello"
str=[...str]
console.log(str);

const reverse=(arr,n,i)=>{
   if(i==n){
    return
   }
   console.log(arr[i]);
   reverse(arr,n,i+1)

}
reverse(str,str.length,0)
