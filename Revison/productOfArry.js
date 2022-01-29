
function productArray(arr){
    var res=[]
    for(var i=0;i<arr.length;i++){
        res.push(arr[i]*arr[i])
    }
    console.log(res);
}



function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        let arr = input[i].trim().split(" ").map(Number)
        console.log(arr)
        productArray(arr)
     
    }
   
    }

  
if (process.env.USERNAME === "ranus") {
    runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
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