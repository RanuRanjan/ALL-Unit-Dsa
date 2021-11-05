  function que(arr){
      var stack=[]
      var front=-1
      var rear =-1

      for(var j=0;j<arr.length;j++){
          if(arr[0]=="E"){
              
          }
      }
  }
  
  
  
  
  function runProgram(input) {
    var newInput = input.trim().split("\n");
    for(var i=1;i<newInput.length;i++){
        var arr=newInput[i].trim().split(" ")
        console.log(arr);
    }
    
    
  }
  if (process.env.USERNAME === "ranus") {
    runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
    D`);
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
  