
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let n = matrix.length
let m = matrix[0].length

for (let i = 0; i < n; i++) {
    for (let j = i; j < m; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
    }
    matrix[i].reverse()
    console.log(matrix[i]);

}