 let arr1=[1,2,3,4]
 let arr2=[5,6,7,8]
 let arr3=[]

 let i=0;
 let j=0;

 const merge=(arr1,arr2)=>{
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
        arr3.push(arr1[i])
        i++
        }
        else{
            arr3.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length){
        arr3.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        arr3.push(arr2[j])
        j++
    }
    return arr3
 }
 console.log(merge(arr1,arr2));