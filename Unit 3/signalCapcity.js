function runProgram(input) {
    var newInput =input.split("\n");
    var testcase = Number(newInput[0]);
// var stack =[];

  for(var i=1;i<newInput.length;i+=2){
    var arr= newInput[i+1].trim().split(" ").map(Number);
    // console.log(arr);
    
  }
}
if (process.env.USERNAME === "ranus") {
  runProgram(`2
  7
  100 80 60 70 60 75 85
  5
  3 5 0 9 8`);
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