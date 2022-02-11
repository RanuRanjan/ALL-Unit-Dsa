function stringparen(str){
    var stack=[]
    // console.log(str);
    if(str.length%2==1){
        console.log("Not Balanced")
    }
    for(let i=0;i<str.length;i++){
        if(str[i] == '('||str[i]=="{"||str[i]=="["){
          stack.push(str[i])
        }
        if(str[i]==')'){
            stack.pop("(")
        }
        if(str[i]=='}'){
            stack.pop("{")
        }
        if(stack[i]=="]"){
            stack.pop("[")
        }
    }
    // console.log(stack);
    if(stack.length>0){
        console.log("Not Balanced");
    }
    else{
        console.log("Balanced");
    }
}


function runProgram(input) {
   var  newInput= input.trim().split("")
//    console.log(newInput);
  stringparen(newInput)

}
if (process.env.USERNAME === "ranus") {
    runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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