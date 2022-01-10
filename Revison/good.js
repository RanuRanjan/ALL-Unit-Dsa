function goodpair(arr){
    var count=0
    for(var i=0;i<arr.length;i++){
       for(var j=0;j<arr.length;j++){

        // console.log(arr[j]);
           if(arr[i]==(2*arr[j])){
               count++
           }
       }
    }
    console.log(count);
}

function runProgram(input) {
  var newInput = input.trim().split("\n");
   for(var i=1;i<newInput.length;i+=2){
       var len= +newInput[i]
       var arr=newInput[i+1].trim().split(" ").map(Number)
    //    console.log(len);
    //    console.log(arr);

       goodpair(arr)
   }
  
}
if (process.env.USERNAME === "ranus") {
  runProgram(`2
  5
  1 1 1 1 1
  6
  1 1 2 2 4 1 `);
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
