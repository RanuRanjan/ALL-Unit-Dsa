function runProgram(input) {
    var newInput = input.trim().split("\n");
    
    // console.log(arr)
    var arr = [];
    var n = 0;
    for (var i = 1; i < newInput.length; i++) {
      var str = newInput[i].trim().split(" ");
      // console.log(str);
     
      if (str[0] == "E") {
        arr.push(str[1]);
        console.log(n++)
      }
       else if (n == 0)
        {
        console.log("-1", n);
      } 
      else if (str[0] == "D") {
        var out = arr.shift();
        // console.log(out);
  
        console.log(out, n--);
      }
    }
  }
  
  if (process.env.USERNAME === "ranus") {
    runProgram(`10
    D
    D
    E 51
    E 64
    E 44
    D
    E 54
    E 74
    D
    E 47`);
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