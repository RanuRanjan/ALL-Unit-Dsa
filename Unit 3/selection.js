function runProgram(input) {
    var newInput=input.trim().split("\n")
    var len= +newInput[0];
    var arr= newInput[1].trim().split(" ").map(Number)
  
    for(var i=0;i<len-1;i++){
      //   swap=false;
      min_index=i;
        for(j=i+1;j<len;j++){
            if(arr[j]>arr[min_index]){
               min_index=j
               }
            }
          if(min_index!=i){
            temp=arr[min_index]
            arr[min_index]=arr[i]
            arr[i]=temp
            }
          
          
    
        
        
    }
    console.log(arr.join(" "));
  }
  if (process.env.USERNAME === "ranus") {
    runProgram(`5
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
  