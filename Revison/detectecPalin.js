function palindrome(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]+=1;
            
        }
    }
    // console.log(obj);
    let oddCount = 0;
    for(key in obj){
        // console.log(key);
      if(obj[key]%2==1){
        oddCount++
    }

    }
    if (oddCount >1) {

        return "Not Possible!";
    }
    else{
        return "Possible!";
    } 
    
}




function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        let arr = input[i].trim().split("")
        // console.log(arr)
       console.log(palindrome(arr)) 
    }
   
    }
if (process.env.USERNAME === "ranus") {
    runProgram(`2
    6
    aabbcc
    5
    aabcd`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}