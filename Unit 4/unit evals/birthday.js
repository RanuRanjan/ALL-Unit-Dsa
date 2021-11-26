function runProgram(input) {
   
     var newInput=input.trim().split(" ")

     let first=  +newInput[0]
     let last=  +newInput[1]
    //  console.log(first,last);

   for(let i=1;i<=first;i++){
       if(last>1){
           for(let j=i+1;j<=first;j++){
               console.log(i,j);
           }
       }
       else{
           console.log(i);
       }
   }

 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`3 1`);
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