function equilibrium(data){
    for(var i=0;i<data.length;i++){
        var left=0;
        for(var j=0;j<i;j++){
            left=left+data[j]
        }
        // console.log(leftsum);
        var right=0;
        for(var j=i+1;j<data.length;j++){
            right=right+data[j]
        }
        // console.log(rightsum);
        if(left==right&&i!=0&&i!=data.length){
            return(i+1);
        }
    }
    
        return(-1);
      
       
 }
  function runProgram(input) {
    let newInput = input.split("\n");
  
    var arr=newInput[1].trim().split(" ").map(Number)
    equilibrium(arr)
}
if (process.env.USERNAME === "ranus") {
    runProgram(`5
    3 3 5 5 1`);
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