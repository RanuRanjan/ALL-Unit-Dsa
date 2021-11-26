function SumWays(n){
    
}



function runProgram(input) {
   var newInput= input.trim().split("\n")
   
    var n = +newInput[1]
    console.log(n);

 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`1
    5`);
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