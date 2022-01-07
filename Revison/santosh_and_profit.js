function Ways(n){
    if(n<0){
        return 0;
    }
   else if(n==0){
      return 1;
    }
    return Ways(n-4)+Ways(n-8)
}


function runProgram(input) {
   
    var newInput=input.trim().split("\n")
   
    for(var i=1;i<newInput.length;i++) {
        var num= Number(newInput[i])
        // console.log(num);
        console.log(Ways(num));
    }
    // console.log(num);
}
if (process.env.USERNAME === "ranus") {
   runProgram(`2
   72
   145`);
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