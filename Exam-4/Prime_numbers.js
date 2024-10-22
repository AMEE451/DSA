
const isprime = (n) => {
    if (n == 2) {
        return true
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}
console.log(isprime(4));


let n = 13
let count = 0
for (let i = 2; i <= n; i++) {
    if (isprime(i)) {
        console.log(i);
        count++
    }
}
console.log("count:",count);
