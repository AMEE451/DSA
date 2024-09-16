let str = "hello"
const frequency = (arr, n, i) => {
    if (arr.length == 0) {
        return 0
    }
    else {
        return (arr[0] == n ? 1 : 0)+ frequency(arr.slice(1), n);
    }

}
console.log(frequency(str, "l", 0));
console.log(frequency(str, "e", 0));