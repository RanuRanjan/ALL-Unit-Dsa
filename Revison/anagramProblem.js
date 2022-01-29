let ans = [];

function solve(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].split("").sort().join("");
        if (!obj[str]) {
            ans.push(arr[i]);
            obj[str] = 1;
        }
    }
}



function runProgram(input) {
   

    var newInput= input.trim().split("\n");
   
    for(var i=1;i<newInput.length;i++){
        var  str= newInput[i].trim().split(" ")
        console.log(str);
    }
    solve(str)

     console.log(ans.sort().join("\n"));
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`5
    eodc
    odec
    code
    baca
    aabc`);
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