function lift(str){
    var countfinger=0
   for(var i= 0;i<str.length;i++){
       if(str[i]!=str[i+1]){
           countfinger++
       }
       else{
           continue;
       }

   }
   console.log(countfinger)
}

function runProgram(input) {
    var newInput=input.trim().split("\n")
   console.log(newInput)
    for(var i=1;i<newInput.length;i++){
        var str =newInput[i].trim().split(" ")
        console.log(str)

        lift(str)
    }
  }
  if (process.env.USERNAME === "ranus") {
     runProgram(`2
     aaaaa
     abbbaaz `);
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