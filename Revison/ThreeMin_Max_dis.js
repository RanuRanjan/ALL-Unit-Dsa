function MaxMin(str){
    var obj={}
    for(var i=0;i<str.length;i++){
        if(obj[str[i]]===undefined){
            obj[str[i]]=1
        }
        else{
            obj[str[i]]+=1
        }
    }
    var arr=[]
    for(key in obj){
       arr.push(key)
       console.log(key+"-"+obj[key]);
    }
    // console.log(key);
    // for(var i=0;i<arr.length;i++){
        
    // }
    if(arr.length>=6){
        console.log(arr[0],arr[1],arr[2]);
        console.log(arr[arr.length-3],arr[arr.length-2],arr[arr.length-2]);
    }
    else{
        console.log("Not Possible");
        console.log("Not Possible");
    }


}



function runProgram(input) {
    var newInput= input.trim()
    var num= newInput.trim().split(" ").map(Number)
    // console.log(num);
    MaxMin(num)
  }
  if (process.env.USERNAME === "ranus") {
     runProgram(`1 2 3 4 2 1 6 5`);
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