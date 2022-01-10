  function 
  
  
  function runProgram(input) {
    var newInput = input.trim().split("\n");
     for(var i=1;i<newInput.length;i+=2){
         var len= +newInput[i]
         var arr=newInput[i+1].trim().split(" ").map(Number)
         console.log(len);
         console.log(arr);
     }
    
  }
  if (process.env.USERNAME === "ranus") {
    runProgram(`3
    1
    2
    3
    2 0 1
    4
    2 0 2 1`);
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
  