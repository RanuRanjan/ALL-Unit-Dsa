function maxProductArray(arr){
    var max=0
    var second=0
    for(var i=0;i<arr.length;i++){
      if(arr[max]<arr[i]){
          max=i
          
      }
    }
    console.log(arr[max]);
    // for()
    for(var i=0;i<arr.length;i++){
        if(arr[second]<arr[i] && i != max){
            second=i
        }
    }
console.log(arr[second])
 var res=arr[second]*arr[max];
 console.log(res)
}
 
 function runProgram(input) {
     // Write code here
     var newInput = input.trim().split("\n");
     for(var i=1;i<newInput.length;i+=2){
         var num=  newInput[i+1].trim().split(" ").map(Number)
        //  console.log(num);

         maxProductArray(num)
     }
 
    
 
 }
 if (process.env.USERNAME === "ranus") {
     runProgram(`3
     6 
     9 7 8 9 10 11 21 20 50 100
     5
     1 2 3 4 5
     2
     0 0`);
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