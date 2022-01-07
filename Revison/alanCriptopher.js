function stringparen(str){
    var stack=[]
    // console.log(str);
    var index=[]
    var arr1=[]
    for(let i=0;i<str.length;i++){
   
   if(str[i]=="#"){
       
       index.push(i)
       continue;
   }
   else{
       stack.push(str[i])
   }
    
    
   
}
for(var j=0;j<stack.length;j++){
    if(j==index-1){
        continue
    }
    else{
        arr1.push(stack[j])
    }
}

// console.log(index);
// console.log(stack);
console.log(arr1);
}

function runProgram(input) {
   var  newInput= input.trim().split("\n")
//    console.log(newInput);
   for(let i=1;i<newInput.length;i++) {
       var str=newInput[i].trim().split("")
    //    console.log(str);
    stringparen(str)
   }

}
if (process.env.USERNAME === "ranus") {
    runProgram(`2
    ab#df#
    a#bc`);
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