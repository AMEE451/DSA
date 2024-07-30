
let arr = [1, 2, 3, 4, 5]

for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
}



let arr2=[10,20,30,40]

let i=0;
let j=arr2.length-1;

while(i<j){
    temp=arr2[i]
    arr2[i]=arr2[j]
    arr2[j]=temp;
   
    i++;
    j--;
}
console.log(...arr2);
