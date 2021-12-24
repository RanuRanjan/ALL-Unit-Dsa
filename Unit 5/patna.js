function shortpath(arr){

}

function runProgram(input) {
    var newInput=input.trim().split("\n")
    
    var arr =newInput[1].trim().split(" ").map(Number)
    
   console.log(arr);
  }
  if (process.env.USERNAME === "ranus") {
     runProgram(`4
     10 30 40 20 `);
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