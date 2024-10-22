let str1 = "lloeh"
let str2 = "hello"

str1 = str1.split("").sort().join()
str2 = str2.split("").sort().join()

if (str1.length == str2.length) {
    if(str1==str2){
        console.log("true");
    }
    else{ 
        console.log("false");
    }
}
else{
    console.log("false");
}
