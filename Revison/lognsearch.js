function lognsearch(arr, k) {
     var start=0;
     var end= arr.length-1
     var ans= -1

     while (start<=end){
         var mid = start+Math.floor((end-start)/2);
         if(arr[mid]==k){
             ans=mid
         }
         if(arr[mid]>k){
             end=mid-1
            }
            else{
             start=mid+1
         }

    }
    return ans;
}


function runProgram(input) {
    let newInput = input.split("\n");
    
   for(var i=1;i<newInput.length;i+=2){
       var arr=newInput[i].trim().split(" ").map(Number)
       var k= +newInput[i+1]
    //    console.log(arr,k);
      (lognsearch(arr,k));
   }
    
}
if (process.env.USERNAME === "ranus") {
    runProgram(`5
    1 2 4 5 6
    6`);
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

function runProgram(input) {
    let newInput = input.split("\n");
    
   for(var i=1;i<newInput.length;i+=2){
       var arr=newInput[i].trim().split(" ").map(Number)
       var k= +newInput[i+1]
    //    console.log(arr,k);
      console.log(lognsearch(arr,k));
   }
    
}
if (process.env.USERNAME === "ranus") {
    runProgram(`5
    1 2 4 5 6
    6`);
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