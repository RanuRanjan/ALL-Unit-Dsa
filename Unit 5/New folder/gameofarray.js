

function runProgram(input) {
   
    var newInput=input.trim().split("\n")
    var [len,k]=newInput[0].trim().split(" ").map(Number)
    // console.log(len,k);
    var arr=newInput[1].trim().split(" ").map(Number)
    var ans=""
    var len=arr.length
     for(var i=0;i<len;i++){
        ans+=arr[(k+i)%len]+" ";
        }
        console.log(ans);
   
    // console.log(data);
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`6 4
    1 2 5 4 0 6`);
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