function Pair(arr ,k){
    var left=0;
    var right=arr.length-1;

    while(left<right){
        var sum=0;
        var pair=arr[left]+arr[right];
        // console.log(pair);
        if(pair<k){
            sum= pair+sum
        }
        else{
            return -1
        }
        return sum;
    }
}



function runProgram(input) {
    var newInput = input.trim().split("\n");
    for(var i=1;i<newInput.length;i+=3) {
        var len = +newInput[i]
        var arr= newInput[i+1].trim().split(" ").map(Number)
        var k= +newInput[i+2]
        // console.log(arr);
        // console.log(k);
        console.log(Pair(arr,k));

    }
    
  }
  if (process.env.USERNAME === "ranus") {
    runProgram(`2
    5
    1 2 3 4 5
    7
    3
    30 10 20
    15`);
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
  