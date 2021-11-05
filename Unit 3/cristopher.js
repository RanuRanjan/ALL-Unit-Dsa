function nolan(data){
    
    var arr = [];
    // console.log(arr);
    for(var i = 0;i<data.length; i++){
        if(arr[i] =="#"){
            arr.pop()
            // console.log(arr);
        }
        else{ 
            arr.push(arr[i]);
        }
    }
   console.log(arr);
}


function runProgram(input) {

    var newInput = input.trim().split("\n");
  
   for(var i =1;i<newInput.length;i++) {
   var data = newInput[i].trim().split(" ")
   nolan(data);
   }
}
    
if (process.env.USERNAME === "ranus") {
    runProgram(`2
    ab#d
    a#bc`);
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