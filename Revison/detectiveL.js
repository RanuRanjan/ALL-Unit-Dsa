function de(arr, row, col) {

    for (let k = 0; k < col; k++) {

        for (let i = row - 1 - buttom; i >= 0; i--) {
            for (let j = buttom + 1; j < col; j++) {
                ans += arr[i][j] + " "
                // console.log(arr[i][j])
            }
            break
        }
        buttom++
    }
    console.log(ans)
}





function runProgram(input) {
    // Write code here
    var newInput = input.trim().split("\n");
    let i = 1
    while (i < newInput.length) {
        let [row, col] = input[i].trim().split(" ").map(Number)
        // console.log(row, col)
        let arr = []
        for (let j = 0; j < row; j++) {
            arr.push(input[i + j + 1].trim().split(" "))
        }
     

        i += row + 1
    }

   

}
if (process.env.USERNAME === "ranus") {
    runProgram(`2
    3 3
    1 2 3
    4 5 6
    7 8 9
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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