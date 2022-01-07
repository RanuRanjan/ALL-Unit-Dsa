let ans = [];

function solve(arr) {
  
}



function runProgram(input) {
   

    var newInput= input.trim().split("\n");
   
    let arr = newInput.slice(1).map((el) => el.trim());
solve(arr)

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