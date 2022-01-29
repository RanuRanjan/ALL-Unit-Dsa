function ways(num){
    if(num==0){
        return 1
    }
    if(num==1){
       return 1
    }
    else if(num==2){
        return 2
    }

   return  ways(num-3)+ways(num-2)+ways(num-1)
}


function runProgram(input) {
   
    var newInput=input.trim().split(" ")

    var num=newInput[0].trim().split(" ").map(Number)

   console.log(ways(num));
}
if (process.env.USERNAME === "ranus") {
   runProgram(`4`);
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