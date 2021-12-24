function sumOddEven(arr){
    var even=0
    var odd=0
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
                even+=arr[i]
        }
        else{
            odd+=arr[i]
        }
    }
    if(odd>even){
        console.log("Odd");
    }
    else{
        console.log("Even");
    }
}

function runProgram(input) {
   
    var newInput=input.split("\n")
    var arr=newInput[1].trim().split(" ").map(Number)
    // console.log(arr);
    sumOddEven(arr)
    
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`4
    1 2 3 4`);
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