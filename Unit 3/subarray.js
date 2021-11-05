


function runProgram(input) {

    var newInput=input.trim().split("")
    // console.log(newInput);
    var arr=[]
    for(var i=0;i<newInput.length;i++){
          var sub=[]
          for(var j=i;j<newInput.length;j++){
              sub.push(newInput[j])
            //   console.log(sub);
              arr.push(sub)
            //   console.log(arr);
              sub=[]
            //   console.log("New Line")
          }
        // console.log("first end");
    }
  console.log(arr);
  }
  if (process.env.USERNAME === "ranus") {
    runProgram(`aman`);
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
  