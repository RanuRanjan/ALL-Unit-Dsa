function runProgram(input) {
    var newInput =input.split("\n");
    var testcase = Number(newInput[0]);
  var stack =[];
  var data=[]
//   console.log(data);
  for(var i=1;i<=testcase;i++){
    var arr= newInput[i].trim().split(" ").map(Number);
//    console.log(arr)
    
    if(arr[0]===1){
       stack.push(arr[1])
       data.push(arr[1])
       console.log(data);
    //    console.log(stack.join(" "))
  }
 


    else if(arr[0]===2){
      if(stack.length!==0){
         stack.pop();
      }
      }
    else{
        if(stack.length===0){
            console.log("Empty!")
        
        }
       else{
            console.log(stack[stack.length-1]);
       }
    }
  }
//   
}
if (process.env.USERNAME === "ranus") {
  runProgram(`6
  1 15
  1 20
  2
  3
  2
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