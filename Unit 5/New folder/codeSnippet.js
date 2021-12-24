function runProgram(input) {
   
   var newInput=input.split("\n")
   var arr=newInput[1].trim().split(" ").sort(function(a,b){return a-b}).map(Number)

   console.log(data);
}
if (process.env.USERNAME === "ranus") {
   runProgram(`8`);
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