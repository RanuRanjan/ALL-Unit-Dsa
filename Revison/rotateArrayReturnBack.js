function minimumsearch(arr) {
   
   
}


function runProgram(input) {
   
    var newInput=input.trim().split("\n")
    // var  row=4
    var arr=newInput[1].trim().split(" ").map(Number)
    console.log(arr);
    console.log(minimumsearch(arr));
}
if (process.env.USERNAME === "ranus") {
   runProgram(`10
   4 6 7 9 10 -1 0 1 2 3`);
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