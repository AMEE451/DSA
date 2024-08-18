
let string = "you are a student"
let arr = string.split(" ")
console.log(arr);

const capitalize = (arr) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let singleword = arr[i];
        let capital = "";

        capital += singleword[0].toUpperCase()
        
        for (let j = 1; j < singleword.length; j++) {
            capital+=singleword[j]
        }
        result.push(capital)
    }
    return result
}
console.log(capitalize(arr));

