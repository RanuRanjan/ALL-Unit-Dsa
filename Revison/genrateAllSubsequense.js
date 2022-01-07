function subsequence(res, arr, l, h) {
    if (l <= h + 1 && res.length != 0)
        console.log(res);

    for (let i = l; i <= h; i++){
        subsequence(res + arr[i], arr, i + 1, h);
    }
}

function runProgram(input) {
    // Write code here
    var newInput= input.trim().split("\n")  
    var len= +newInput[0]
    var str=newInput[1].trim().split("")
    console.log(str);
    (subsequence("",str,0,len-1));
}
if (process.env.USERNAME === "ranus") {
    runProgram(`4
    abcd`);
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