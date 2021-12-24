function bugfound(arr){
    var index=0
    for(var i=0;i<arr.length;i++){
        if(arr[i]==1){
        index.push(i)
        }
        else{
            console.log("-1");
            break;
        }
    }
    if(index){
        console.log(index)
    }
}



function runProgram(input) {
   var newInput=input.trim().split("\n")
   var arr=newInput[1].trim().split(" ")
//    console.log(arr);
   bugfound(arr)
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`5
    0 0 0 0 0 `);
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