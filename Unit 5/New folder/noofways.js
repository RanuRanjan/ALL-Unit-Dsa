function noofways(data){
    if(data<0){
        return 0
    }
    
    if(data==0||data==1){
        return 1
    }
 
  
    else{
        return noofways(data-1)+noofways(data-3)+noofways(data-4)
    }
}



function runProgram(input) {
   var num = +input
    // console.log(num);
  console.log(noofways(num))
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`5`);
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