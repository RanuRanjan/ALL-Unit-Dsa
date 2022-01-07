function findCommon(arr1, arr2) {
    let left = 0;
    let right = arr2.length - 1;
    let count = 0;
    while (left < arr1.length && right >= 0) {
        if (arr1[left] == arr2[right]) {
            count++;
            left++;
            right--;
        } else if (arr1[left] > arr2[right]) {
            right--;
        } else left++;
    }
    return count;
}
function runProgram(input) {
    let newInput = input.split("\n");
    let testcase = Number(newInput[0]);
    for (let i = 1; i < testcase* 2; i += 2) {
        let [, k] = newInput[i].trim().split(" ").map(Number);
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        if (solve(arr, k)) console.log("Yes");
        else console.log("No");
    }
}
if (process.env.USERNAME === "ranus") {
    runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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