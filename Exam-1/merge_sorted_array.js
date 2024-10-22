let arr1 = [1, 3, 5,7]
let arr2 = [2, 4, 6]
let mergedarr = []

let i = 0
let j = 0

while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        mergedarr.push(arr1[i])
        i++
    }
    else {
        mergedarr.push(arr2[j])
        j++
    }
}
while(i<arr1.length){
    mergedarr.push(arr1[i])
    i++
}
while (j < arr2.length) {
    mergedarr.push(arr2[j])
    j++
}
console.log(mergedarr);
