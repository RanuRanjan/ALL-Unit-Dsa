function ways(arr,k){
    if(k>arr.length){
        return-1
    }
    var res=0
    var ans=0
    for(var i=0;i<k;i++){
        res+=arr[i]
        ans=res
    }
    for(var j=k;j<arr.length;j++){
        
        ans=ans-arr[j-k]+arr[j]
        res=Math.max(res,ans)
    }
    console.log(res);
    // console.log(res);



}


function runProgram(input) {
   
    var newInput=input.trim().split("\n")
    var [len,k]=newInput[0].trim().split(" ").map(Number)
    console.log(k);
    var arr=newInput[1].trim().split(" ").map(Number)
       
    // console.log(arr);

    ways(arr,k)
 
}
if (process.env.USERNAME === "ranus") {
   runProgram(`10 3
   -1 -1 -2 1 -2 4 1 9 3 9`);
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