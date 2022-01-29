function shopping(s,e){
    for (let i = 1; i <= s; i++) {
        if (e > 1) {
            for (let j = i + 1; j <= s; j++) {
                console.log(i, j)
            }
        }else{
            console.log(i)
        }

    }
}



function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    let [s, e] = input[0].trim().split(" ").map(Number)
    // console.log(start, end)
   shopping(s,e);
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