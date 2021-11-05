function runProgram(input) {
  var newInput = input.split("\n");

  let testcase = newInput[0].trim().split(" ");

  let len = +testcase[0];
  let sum = +testcase[1];

  // console.log(len,sum);
  let arr = newInput[1].trim().split(" ").map(Number);
  // console.log(arr);
  let count = 0;
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] == sum) {
        count++;
      }
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "ranus") {
  runProgram(`5 9
    3 0 6 2 7`);
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
