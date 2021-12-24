function charcount(str){
    var obj={}
    for(var i=0;i<str.length;i++){
        if(obj[str[i]]===undefined){
            obj[str[i]]=1
        }
        else{
            obj[str[i]]+=1
        }
    }
    // console.log(obj);
    var res=[]
    for(key in obj){
        res.push(key+obj[key]);
    }
    console.log(res.join(""));
}

function runProgram(input) {
    var newInput=input.trim()
//    console.log(newInput);
    charcount(newInput)
   
  }
  if (process.env.USERNAME === "ranus") {
     runProgram(`aaabbbbcc `);
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