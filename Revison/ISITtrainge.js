function istriangle(a,b,c){
   if (a + b <= c || a + c <= b || b + c <= a){
       return "No"
   }
   else{
       return "Yes"
   }
}
  
  
function runProgram(input) {
  var newInput = input.trim().split("\n");
   
  for(var i=1;i<newInput.length;i++){
      
       var [a,b,c]=newInput[i].trim().split(" ").map(Number)
    //    console.log(a,b,c);
     console.log(istriangle(a,b,c));
   }
  
}
if (process.env.USERNAME === "ranus") {
  runProgram(`4
  4 5 13
  7 1 8
  2 5 4
  2 2 2
  `);
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
