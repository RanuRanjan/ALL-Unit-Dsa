let ans = [];

function palindrome(str) {
    let obj = {};
    let oddCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1;
            oddCount++;
        } else {
            obj[str[i]]++;
            if (obj[str[i]] % 2 === 0) oddCount--;
            else oddCount++;
        }
    }
    if (oddCount > 1) {

        return "Not Possible!";
    }
    else{
        return "Possible!";
    } 
}




function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        let arr = input[i].trim().split(" ").map(Number)
        // console.log(arr)
        greater(arr)
    }
   
    }

    function reverse(arr) {
        let j = 0;
        let k = arr.length - 1;
        while (j < k) {
            let temp = arr[j]
            arr[j] = arr[k]
            arr[k] = temp

            j++
            k--
        }
        console.log(arr.join(" "))
    }

}
if (process.env.USERNAME === "ranus") {
    runProgram(`1
    4
    1 3 2 4`);
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