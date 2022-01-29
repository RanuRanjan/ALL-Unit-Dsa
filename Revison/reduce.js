function reduceString(str) {
    let stack = [];
  

    for (let i = 0; i < str.length; i++) {
        if (stack[stack.length - 1] == str[i])
            stack.pop();
        else
            stack.push(str[i]);
    }
    if (stack.length == 0)
        return "Empty String"
    else
        return stack.join("");
}


function runProgram(input) {
   
    var newInput=input.trim().split(" ")
    // var  row=4
    var str=newInput[0]
    console.log(str);
    console.log(reduceString(str));
}
if (process.env.USERNAME === "ranus") {
   runProgram(`aaabbbccddd`);
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