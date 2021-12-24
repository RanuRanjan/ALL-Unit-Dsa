function runProgram(input) {
    var newInput=input.trim()
    //  console.log(newInput);
    for(var i=0;i<newInput.length;i++)
    if(newInput[i]=="A"){
           console.log("hi");
        }
        console.log(newInput);
   
  }
  if (process.env.USERNAME === "ranus") {
     runProgram(`All-convoYs-9-be:Alert1.
     4 `);
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