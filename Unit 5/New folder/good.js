function goodPairs(n,data){
    var res=0
    for(var i=0;i<data.length;i++){
        for(var j=0;j<data.length;j++){
            if(data[j]=2*data[i]){
                res++
            }
        }
    }
    return res
}

function runProgram(input) {
   
    var newInput=input.trim().split("\n")

    for(var i=1;i<newInput.length;i+=2){
        var n= +newInput[i]
        var arr=newInput[i+1].trim().split(" ").map(Number);
        // console.log(n,arr);
        console.log(goodPairs(n,arr));
    }
   
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`2
    5
    1 1 1 1 1
    6
    1 1 2 2 4 1 `);
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