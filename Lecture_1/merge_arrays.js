
let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=[]

const merge=(arr1,arr2)=>{
    for(let i=0;i<=arr1.length;i++){
        arr3.push(arr1[i])
    }
    for(let j=0;j<=arr2.length;j++){
        arr3.push(arr2[j])
    }

    return arr3
}
console.log(merge(arr1,arr2));