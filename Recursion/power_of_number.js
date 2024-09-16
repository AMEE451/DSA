
const power = (n, pow) => {
    if (pow == 0) {
        return 1
    }
    else {
        return n * power(n, pow - 1)
    }
}
console.log(power(2, 3));
console.log(power(5, 0)); 