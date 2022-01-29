function findTwice(str) {
    let obj = {};
    let countrepeat = 0;
    for (let i = 0; i < str.length; i++) {
       if(obj[arr[i]]===undefined){
           obj[arr[i]]==1
       }
       else{
           obj[arr[i]]+=1
       }
    if (countrepeat > 1) {

        return "Not Possible!";
    }
    else{
        return "Possible!";
    } 
}
function runProgram(input) {
    let newInput = input.split("\n");
    let n = Number(newInput[0]);
    for (let i = 1; i < newInput.length; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(findTwice(arr));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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