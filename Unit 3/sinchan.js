function citi(arr,arr1){
    
} 
 
 
 
 function runProgram(input) {
    var newInput = input.trim().split("\n");
    for(var i=1;i<newInput.length;i+=2){
        var arr=newInput[i].trim().split(" ").map(Number)
        var arr1=newInput[i+1].trim().split(" ").map(Number)
        console.log(arr);
        console.log(arr1);
    }
    
  }
  if (process.env.USERNAME === "ranus") {
    runProgram(`2
    2 4
    2 1
    1 5
    3`);
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
  