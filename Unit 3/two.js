function two(arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let pair = arr[left] + arr[right];
    if (pair == k) {
      return left, right;
    } else if (pair > k) {
      right--;
    } else {
      left++;
    }
  }
  return -1;
}

function runProgram(input) {
  var newInput = input.trim().split("\n");

  for (var i = 1; i < newInput.length; i += 2) {
    var testcase = newInput[i].trim().split(" ");
    var len = +testcase[0];
    var sum = +testcase[1];
    var arr = newInput[i + 1].trim().split(" ").map(Number);
    console.log(arr);
    console.log(len, sum);
    console.log(two(arr, sum));
  }
}
if (process.env.USERNAME === "ranus") {
  runProgram(`3
   4 9
   2 7 11 15
   5 10
   1 2 3 5 5
   2 100
   48 49`);
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
