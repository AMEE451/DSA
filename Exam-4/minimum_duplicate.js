
let arr = [1, 2, 3,3, 2, 1]
let arr2=[]
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            console.log("Duplivates:",arr[i]);
            arr2.push(arr[i])
        }
    }
}
let min=arr[0]
for(let i=0;i<arr2.length;i++){
   if(arr[i]<min){
    min=arr[i]
   }
}
console.log("Lowest duplicate:",min);
