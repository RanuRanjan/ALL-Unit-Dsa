function qua(num){
    if(num%2==0){
        console.log("1");
    }
    else{
        console.log('2')
    }
}


function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");
   for(var i=1;i<input.length;i++){
          var num= +input[i]
        //   console.log(num);
        qua(num)
   }
}
if (process.env.USERNAME === "ranus") {
    runProgram(`2
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