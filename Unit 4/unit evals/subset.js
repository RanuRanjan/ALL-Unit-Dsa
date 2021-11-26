function subset(arr){
    for (var i=0;i<arr.length;i++){
        var sub=[]
        for(var j=i;j<arr.length;j++){
            sub.push(arr[j])
          
        }
    }
    return sub
}


function runProgram(input) {
     var newInput=input.trim().split("\n")
     for (var i =1 ;i<newInput.length;i+=2){
         var test= newInput[i].trim().split(" ")
         var k= +test[1]
         var arr= newInput[i+1].trim().split(" ").map(Number)
        //  console.log(k ,arr);
        console.log(subset(arr));
     }
 
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`2
    4 2
    4 3 2 1
    2 1
    2 3`);
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