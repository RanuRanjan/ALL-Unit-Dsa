function runProgram(input) {
   
   var newInput=input.trim().split("\n")
   var participants= +newInput[0]

   var [l,r]=newInput[1].trim().split(" ").map(Number);
   
//    console.log(participants);
//    console.log(l,r);
   
var arr=[]
for(var i=1;i<=participants;i++){
    if(arr.length ===0){
        return([])
    }
}
// console.log(arr);

 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`3
    0 1`);
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