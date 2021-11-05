


function runProgram(input) {

    var num = +input
    // console.log(num);
    var arr=[]
    for(var i=0;i<num;i++){
         arr=[]
        for(var j=0;j<num;j++){
           if(j%2!=0){
               arr.push(j)
           }
           else{
               arr.push(i)
           }
        }
        console.log(arr.join(" "));
    }
    
  }
  if (process.env.USERNAME === "ranus") {
    runProgram(`5`);
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
  