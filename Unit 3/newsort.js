function runProgram(input) {
  var newInput= input.trim().split("\n");
 var testCase=newInput[0].trim().split(" ")
 var len = +testCase[0]
 var k = +testCase[1]

 var arr= newInput[1].trim("").split(" ").map(Number)
//  console.log(arr);

 for(var i=0;i<len-1;i++){
     for(var j=0;j<len-i-1;j++){

        if(arr[j]%k  >  arr[j+1]%k){
              var temp=arr[j]
              arr[j]=arr[j+1]
              arr[j+1]=arr[j]
        }
     }
 }
console.log(arr);
}
if (process.env.USERNAME === "ranus") {
  runProgram(`5 6
  12 18 17 65 46`);
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
