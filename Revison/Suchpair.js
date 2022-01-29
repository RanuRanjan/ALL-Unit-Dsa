function pair(arr,k){
    var count=0
    for(var i=0;i<arr.length;i++){
         for(var j=1;j<arr.length;j++){
         var sum=arr[i]+arr[j]
        // console.log(arr[j]);
        // console.log(arr[i]);
         if(sum==k){
             count++
         }

    }
}
    // console.log(count);
    if(count>0){
        return 1
    }
    else{
        return "-1"
    }
}


function runProgram(input) {
   
    var newInput=input.trim().split("\n")

for(var i=1;i<newInput.length;i+=2){
var [len,k]= newInput[i].trim().split(" ").map(Number)
    var arr= newInput[i+1].trim().split(" ").map(Number)
   console.log(pair(arr,k));
    // console.log(arr,k);

}
    
}
if (process.env.USERNAME === "ranus") {
   runProgram(`1
   5 2
   3 4 0 2 7
   5 2
   3 4 0 2 7`);
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