function runProgram(input) {
   var newInput=input.trim().split("\n")
//    console.log(newInput);
   var len=  +newInput[0]
   let A=2
   let B=3

   let even=0;
   let odd=0
   let Equation
   for(let i=1;i<newInput.length;i++){
       let arr= newInput[i].trim().split(" ").map(Number)
    //    console.log(arr);
        if(arr[i]%2==0){
            even= arr[i]+even
     }
     else{
         odd= arr[i]+odd
     }

   }

    Equation=A*(even)+B*(odd)
    console.log(Equation);
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`5
    1 2 3 4 5`);
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