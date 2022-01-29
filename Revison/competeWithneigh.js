// function reduceString(str) {
   
// }


function runProgram(input) {
   
    var newInput=input.trim().split(" ")
    // var  row=4
    var arr=newInput[0].
}
if (process.env.USERNAME === "ranus") {
   runProgram(`4
   8 15 3 7`);
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