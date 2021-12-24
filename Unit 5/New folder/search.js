function runProgram(input) {
    var newInput=input.split("\n")
    var arr=newInput[1].trim().split(" ").sort(function(a,b){return a-b}).map(Number)
 
    // console.log(arr);
    // var num= +newInput[2]
    // console.log(num);
    for(var i=2;i<newInput.length;i++){
        var data=newInput[i].trim().split(" ").map(Number)
        console.log(data);

        var count=0
        for(var i=0;i<arr.length;i++){
            if(arr[i]<=data[i] || arr[i]<=data[i+1]){
                count++
            }
        }
        console.log(count);
    }
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`5
    10 1 10 3 4
    4
    1 10
    2 9
    3 4
    2 2
    `);
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