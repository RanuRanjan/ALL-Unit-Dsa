function Ways(n,k,l){
    if(n==0){
        return 1;
    }
    if(l<0){
        return 0;
    }
    return Ways(k-n[0])+  Ways(k-n[1])+ Ways(k-n[2])
}



function runProgram(input) {
     let newInput=input.trim().split("\n")

     let testcase= newInput[0].split(" ")
     let len= +testcase[0]
     let k= +testcase[1]
     let num= newInput[1].trim().split(" ").map(Number)

    //  console.log(len ,k ,num);
    console.log(Ways(num,k,len));
   
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`3 3
    1 2 3`);
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