function runProgram(input) {
   var newInput= input.trim().split("\n");
   var testCase= +newInput[0]
   var keys = []
   var values =[]
   var obj={}
   for(var i=1;i<newInput.length;i++){
       var arr=newInput[i].trim().split(" ")
    //    console.log(arr);
 
    keys.push(arr[0].split(" "))
    values.push(arr[1].split(" ").map(Number))
}
// console.log(keys);
for(var j=0;j<keys.length;j++){
        obj[keys[j]]= values[j]
    
   
    
}

 for(key in obj){
     console.log(key+"---"+obj[key]);
    //  console.log(obj[key]);
 }
}
  if (process.env.USERNAME === "ranus") {
    runProgram(`6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45`);
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
  