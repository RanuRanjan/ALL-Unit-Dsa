function gcd(num){
   if(num/2==0){
       return num
   }
}


function runProgram(input) {
    // Write code here
    var newInput = input.trim().split("\n");
    for(var i=1;i<newInput.length;i++){
        var num=  +newInput[i]
        console.log(num);
    }

   

}
if (process.env.USERNAME === "ranus") {
    runProgram(`3
    2
    11
    12`);
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