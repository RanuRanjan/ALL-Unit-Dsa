function fact(n){
    if(n<=1){
        return n;
    }
    return  fact(n-1) +fact(n-2)
}
// FIXME: normall fib

// if(n==0){
//     return 0
// }
// if(n==1||n==2){
//     return 1
// }

// return fact(n-1)+fact(n-2)

function runProgram(input) {
   
    var num=input.trim().split(" ").map(Number)
    console.log(num);
    console.log(fact(num));
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