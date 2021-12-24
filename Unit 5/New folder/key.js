function keyva(arr){
    var obj={}
    for(var i=0;i<arr.length;i++){
        if(obj[arr[i]]===undefined){
            obj[arr[i]]=1
        }
        else{
            obj[arr[i]]+=1
        }
    }
    // console.log(obj);
    var max=[]
    var count=0
    for(key in obj){
        if(obj[key]>count){
            count =obj[key]
        //   max.push(obj[key])
       
    }
    console.log(count);
    // console.log(max);
}
}

function runProgram(input) {
   
  var newI =input.trim().split(" ")
//   console.log(newI);
  keyva(newI)
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`8 2 3 4 4 2 2 3 3 2 1`);
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