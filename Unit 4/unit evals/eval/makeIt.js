function remove(str){
    var obj ={}
    for (let i=0;i<str.length;i++){
        if(obj[str[i]]===undefined){
            obj[str[i]]=1
        }
        else{
            obj[str[i]]+=1        }
    }
    let uni=""
    for(key in obj){
        uni+=key
    }
    return uni
}
function Unique(str){
    if(str<=1){
        return str
    }
    return Unique(remove(str))
}


function runProgram(input) {
     var newInput=input.trim().split(" ")
     var str=newInput[0]
    // console.log(str);

    console.log(Unique(str));
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`aaaabbbbbcccccdddd`);
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