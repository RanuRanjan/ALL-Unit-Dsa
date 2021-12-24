function count(arr,l){
    var obj={}
    for(var i=0;i<l;i++){
        if(obj[arr[i]]===undefined){
            obj[arr[i]]=1
        }
        else{
            obj[arr[i]]+=1
        }
    }
    // console.log(obj);
    // var key=""
    var ans=[]
    for(key in obj){
        // console.log(obj[key]);
        ans.push(obj[key])
    }
    console.log(ans.join(" "));
}

function runProgram(input) {
   var newInput=input.trim().split("\n")

   var l= +newInput[0]

   var arr= newInput[1].trim().split(" ").map(Number)
    count(arr,l)
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`10
    0 1 0 1 1 1 0 2 2 0 `);
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