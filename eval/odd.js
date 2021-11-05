



function runProgram(input) {
   
     let newInput= input.trim().split("\n")
     let k=  +newInput[0]
     let arr= newInput[1].trim().split(" ").map(Number)
    //  console.log(k,arr);
   
     var count=0

     for(let i=1;i<(1<<arr.length);i++){
         var subset=[];
         for(let j=0;j<arr.length;j++){
             if(i&(1<<j)){
                 subset.push(arr[j])
             }
         }
         var sum=0;
            for(let m=0;m<subset.length;m++){
                sum+=subset[m]
            }
            if(sum%2!=0){
                count++
     }
     }
     console.log(count);

     



 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`3
    1 2 3`);
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