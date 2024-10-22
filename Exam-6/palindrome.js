let str = "nayan"
const palindrome = (str, start, end) => {
    //This if condition is executed if the string is of one character
    if (start >= end) {
        return true;
    }
    if (str[start] == str[end]) {
        return palindrome(str, start + 1, end - 1);
    }
    else {
        return false;
    }
}
console.log(palindrome(str, 0, str.length - 1));
