function skewness(num){
    var even=0;
    var odd=0;
    for(var j=1;j<=num;j++){
        if(j%2==0){
            if(num%j==0){
                even++
            }
        }
        else{
            if(num%j==0){
                odd++
            }
        }
    }
   
    if(even==odd){
        console.log("Not Skewed");
    }
    else if (odd>even){
        console.log("Odd Skewed");
    }
    else{
        console.log("Even Skewed");
    }
}



function runProgram(input) {
   
    var newInput=input.trim().split("\n")
    // console.log(newInput);
    for(var i=1;i<newInput.length;i++){
        var num= +newInput[i]
        // console.log(num);
     
    skewness(num)
 
    // console.log(data);
 }
}
 if (process.env.USERNAME === "ranus") {
    runProgram(`3
    4
    6
    11
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