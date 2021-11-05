function runProgram(input) {
    //  console.log(input.length);
     var arr=[]
     for(var i=0;i<input.length;i++){
        // console.log(input.charAt(0));
        
        if(input[i]==input[i+1]){
             continue;
        }
        else{
            arr.push(input[i-1])
        }
     }
    //  console.log(input.charAt(3));
     console.log(arr);
}

if (process.env.USERNAME === "ranus") {
  runProgram(`aaaabbccdddd`);
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
