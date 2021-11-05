function Ways(a){
    if(a==0){
        return 1
    }
    if(a<0){
        return 
    }
  return Ways(a-1)+Ways(a-3)+Ways(a-5)
}



function runProgram(input) {
   var num= +input
    console.log(Ways(num));
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`7`);
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