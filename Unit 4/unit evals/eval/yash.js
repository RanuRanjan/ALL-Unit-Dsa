function runProgram(input) {
    var newinput = input.trim().split("\n");
  
    // var obj = {};
    for (var i = 2; i < newinput.length; i+=2) {
      var str = newinput[i].trim().split(" ").map(Number);
      //console.log(str);
      var obj = {};
      for (var j = 0; j < str.length; j++) {
        if (obj[str[j]] == undefined) {
          obj[str[j]] = 1;
        } else {
          obj[str[j]] +=1;
        }
      }
  
      for (key in obj) {
        //console.log(obj[key]);
        if (obj[key] == 1) {
          console.log(key);
        }
      }
    }
  }
  if (process.env.USERNAME === "ranus") {
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