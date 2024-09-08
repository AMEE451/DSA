let matrix = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10]
];

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    } return true;
}

function printPrimes(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (isPrime(matrix[i][j])) {
                console.log(matrix[i][j]);
            }
        }
    }
}

printPrimes(matrix);
