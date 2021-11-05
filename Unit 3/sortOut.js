function runProgram(input) {
    var newInput = input.split("\n");
    var n = Number(newInput[0]);
    var data = newInput[1].trim().split(" ").map(Number);
    var arr =[];
    for(let i =0;i<n;i++){
        arr.push(i);
    }
    //  console.log(data)
    for(var i =0;i<n-1;i++){
        for(var j= 0;j<n-i-1;j++){
            // console.log(data);
            if(data[j]>data[j+1]){
            
        var temp = data[j]
        data[j] = data[j+ 1]
        data[j+1] = temp
        // console.log(data);
        var temp = arr[j]
        arr[j] = arr[j+ 1]
        arr[j+1] = temp

            }
        }
    }
   
    console.log(arr.join(" "));
}    
if (process.env.USERNAME === "ranus") {
    runProgram(`5
    4 5 3 7 1`);
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