function Next(arr){
    var max=[]
      var len=arr.length
    for(var i=0;i<len;i++){

        for(var j=i+1;j<len;j++){
          if(arr[i]<arr[j]){
            max.push(arr[j])
            break;
        }
      
        
    }
    
  
    
              
    }
    return max
}
function runProgram(input) {
    var newInput = input.trim().split("\n");
    
    for(var i=1;i<newInput.length;i+=2){
        var arr=newInput[i+1].trim().split(" ").map(Number)
        // console.log(arr);
        console.log(Next(arr));

    }
    
  }
  if (process.env.USERNAME === "ranus") {
    runProgram(`1
    4
    1 3 2 4`);
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
        