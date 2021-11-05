function QueueLine(arr){
   queue=[]
    for(var i=0;i<arr.length;i++){
   
           if(arr[0]===1 && queue.length<2){
            queue.push(arr[1])
            break
           }
        
      
    }
    console.log(queue);
} 

 
 
 
 function runProgram(input) {
    var newInput = input.trim().split("\n");
    for(var i=1;i<newInput.length;i++){
        var arr=newInput[i].trim().split(" ").map(Number)
        // console.log(arr);
        QueueLine(arr)
    }
    
  }
  if (process.env.USERNAME === "ranus") {
    runProgram(`2 6
    1 1
    1 2
    1 3
    2
    2
    2`);
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
  