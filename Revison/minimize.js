function sortitout(num){
    if(num[0]=='-'){
        num.sort(function(a,b){return b-a})
        console.log(num.join(""));
    }
    else{
        num.sort(function(a,b){return a-b})
        // console.log(num);
        if(num[0]<=0){
            // console.log(num);
            for(let i=1;i<num.length;i++){
                if(num[i]>0){
                    // console.log(num[i]);
                var temp=num[0]
                    num[0]=num[i]
                    num[i]=temp
                    break;
                }
            }
        }
        console.log(num.join(""));
    }
}



function runProgram(input) {
   

    var newInput= input.trim().split("\n");
   
    for(var i=1;i<newInput.length;i++){
        var  str= newInput[i].trim().split("")
        // console.log(str);
        sortitout(str)
     
    }
   
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`2
    53334121
    -1002911
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