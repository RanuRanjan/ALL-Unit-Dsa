
  function runProgram(input) {
    var newInput = input.trim().split("\n");
   
    for(var i=1;i<newInput.length;i++){
        var arr=newInput[i].trim().split(" ").map(Number)
        console.log(arr);
    }
           
    function runProgram(input) {
        var newInput = input.trim().split("\n");
      
        var stack = [];
      
        for (var i = 1; i < newInput.length; i++) {
          var str = newInput[i].trim().split(" ").map(Number);
    
    //  checked(str);
    
    
    
    if(str[0]== 0){
        stack.push(str[1]);
       
    
    }
    
    else if(str[0]== 1){
        console.log(stack[0]);
    }
    else if (str[0]== 2){
        stack.shift();
    }
      }
    }





    
  }
  if (process.env.USERNAME === "ranus") {
    runProgram(`6
    0 1
    0 2
    0 3
    1 
    2
    1`);
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
  