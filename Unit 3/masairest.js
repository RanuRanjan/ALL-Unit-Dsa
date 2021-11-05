function runProgram(input) {

    var newInput = input.trim().split("\n");

    var stack=[]
    for(var i=1;i<newInput.length;i++){
       var arr= newInput[i].trim().split(" ").map(Number)
    //    console.log(arr);
   
    for (var j=0;j<arr.length;j++){
        if(arr[i]==1){
            if(stack.length==0){
                console.log("no food");
            }
            else{
                stack.pop()
            }
        }
        else{
            stack.push(arr[1])
        }
    }
    
    }
    console.log(stack.join(" "));
}
    
if (process.env.USERNAME === "ranus") {
    runProgram(`6
    1
    2 5
    2 7
    2 9
    1
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