 function smallNext(arr){
    var ar=[]
    sum=0
    for(var i=0;i<arr.length;i++ ){
        if(arr[i]>arr[i+1]){
            sum=sum+arr[i+1]
            break;
        }
        else{
            console.log(0);
            break;
        }
        
    }
    console.log(sum);
 }
 
 
 
 
 function runProgram(input) {
    var newInput = input.trim().split("\n");
    
    for(var i=1;i<newInput.length;i+=2){
         var arr= newInput[i+1].trim().split(" ").map(Number)
         console.log(arr);
         smallNext(arr)
    }
    
  }
  if (process.env.USERNAME === "ranus") {
    runProgram(`2
    4
    4 3 1 2
    4
    1 2 3 4`);
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
  