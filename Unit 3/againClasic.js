function brackbalanced(arr){
    let stack=[];
    for(var i=0;i<arr.length;i++){
        var symbol=arr[i];
      //   console.log(symbol);
      if(symbol=='('||symbol=='['||symbol=='{'){
          stack.push(symbol);
          continue;
      }

     if(stack.length==0){
         return false;
     }
      var check;
      switch(symbol){
          case ')':
              check=stack.pop();
              if(check=="{"||check=='[')
              return false;
              break;
          case '}':
              check=stack.pop();
              if(check=="("||check=='[')
              return false;
              break;
          case ']':
              check=stack.pop();
              if(check=="("||check=='{')
              return false;
              break;
      }
    }
    return(stack.length==0)
  //   console.log(stack);
}




function runProgram(input) {
  var newInput = input.trim().split("\n");
  for(var i=1;i<newInput.length;i++){
      var  str=newInput[i].trim().split("")
      // console.log(str);
     if( brackbalanced(str)){
         console.log("balanced");
         
     }
     else{
         console.log("not balanced");
     }
  }
  
}
if (process.env.USERNAME === "ranus") {
  runProgram(`3
  {([])}
  ()
  ([]
  `);
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
