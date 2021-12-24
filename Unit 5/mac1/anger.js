function  postion(arr){
    

}


function runProgram(input) {
   var newInput=input.trim().split("\n")
    
   var arrr= newInput[1].trim().split(" ").map(Number)

  var arr= arrr.sort((a,b)=>{return a-b})

  var  pos1=[]
  var pos=[]

 for(var i=0;i<arr.length;i++){
     if(i==0||i==arr.length-1){
         pos1.push(arr[i])
         pos2.push(arr[i])
     }
     else{
         if(i%2==0){
             pos1.push(arr[i])
         }
         else{
          pos2.push(arr[i])
         }
     }
 }

 let anger= -Infinit


 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`4
    5 10 6 8`);
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