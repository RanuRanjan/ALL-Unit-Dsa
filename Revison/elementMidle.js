function peak(nums){
    var start=0;
    var end=nums.length-1
    // var ans=-1
    
    while(start<end){
      var mid = start +Math.floor((end-start)/2)
      
      if(nums[mid]<nums[mid+1]){
          start=mid+1
      }
     
        else{
            end=mid
        }
    
       
}
return start
}



function runProgram(input) {
   
    var newInput=input.trim().split("\n")
    // var  row=4
    var arr=newInput[1].trim().split(" ").map(Number).sort(function(a,b){return a-b})
   console.log(arr);
   console.log(peak(arr));
}
if (process.env.USERNAME === "ranus") {
   runProgram(`5
   4 3 6 7 8`);
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