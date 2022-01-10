function con(n){
  if(n){
    console.log(n);
  }
  else{
      con(n/2)
        console.log(n%2);
  }
  
}
  function runProgram(input) {
    var newInput = input.trim().split(" ").map(Number);
    var num= +newInput[0]
    console.log(newInput);
    
    con(num)
    
  }
  if (process.env.USERNAME === "ranus") {
    runProgram(`4`);
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
  