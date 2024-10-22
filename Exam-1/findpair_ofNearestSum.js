let arr = [10, 2, 3, 4, 5, 11,15]

const findpair = (arr, target) => {

    arr.sort((a, b) => a - b)

    let i = 0;
    let j = arr.length - 1
    let smallestdiff = Infinity
    let pair = []

    while (i < j) {
        let currdifference = target - arr[i] + arr[j];

        if (currdifference < smallestdiff) {
            smallestdiff = currdifference
            pair = [arr[i], arr[j]]
        }
        if (arr[i] + arr[j] < target) {
            i++
        }
        else {
            j--
        }
    }
    return pair
}
console.log(findpair(arr, 22));
