function lift(str){
    var count=0
    for(var i=0;i<str.length;i++){
        // console.log(str[i]);
        if(str[i]==str[i+1]){
            continue
        }
        else{
            count++
        }
    }
    console.log(count);
}


function runProgram(input) {
   
   var newInput=input.trim().split("\n")
   for(var i=1;i<newInput.length;i++){
       var str=newInput[i].trim().split("")
    //    console.log(str);
        lift(str)
    
   }
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`2
    aaaaa
    abbbaaz`);
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