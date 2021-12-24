function Masai(str,n){
    var ans=""
     for(var i=0;i<n;i++){
         if(str[0]=='a'||str[0]=='e'||str[0]=='i'||str[0]=='o'||str[0]=='u'){
             ans=str+"hulk";
         }
         else{
             ans=str+"thor";
         }
         // console.log(count);
     }
     console.log(ans);
   
 }
 
 
 
 function runProgram(input) {
    
     // console.log(input);
     var newInput=input.trim().split("\n")
     var len= +newInput[0]
     var str=newInput[1].trim()
     // console.log(newInput);
     Masai(str,len)
    //  
  }
  if (process.env.USERNAME === "ranus") {
     runProgram(`5
     abced`);
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