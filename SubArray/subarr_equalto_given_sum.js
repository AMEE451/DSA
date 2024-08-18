
let arr = [1, -1, 5, -2, 3]

const SumOfArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

let k = 10
let flag=false;

for (let i = 0; i < arr.length; i++) {
    let subarr = []
    for (let j = i; j < arr.length; j++) {
        subarr.push(arr[j])
        let currsum = SumOfArr(subarr)

        if (currsum == k) {
           flag=true
           console.log(subarr);
        }
    }
}

if(flag){
    console.log("true");
}else{
    console.log("false");
    
}

