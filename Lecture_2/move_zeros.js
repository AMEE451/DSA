
let arr=[0,1,0,3,4,0,2]
let i=0;
let j=arr.length;
let count=0

const move=(arr)=>{
    while(i<j){
        if(arr[i]==0){
            arr.splice(i,1)
            count++
            // j--/
        }
        else{
            i++
        }
    }

    while(count>0){
        count--
        arr.push(0)
    }
    return arr    
}

console.log(move(arr));