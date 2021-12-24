function ribbon(){
    for(var i=0;i<arr.length;i++){
        
    }
}

function runProgram(input) {
   
    var newInput=input.trim().split("\n")
    var testcase=newInput[0].trim().split(" ")
    var start= +testcase[0]
    var end = +testcase[1]

    var arr=newInput[1].trim().split(" ").map(Number)
    
    // console.log(arr,start,end);
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`4 7
    1 3 4 5
    `);
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