function findNo(arr,k,l){
    var low=0;
    var high=l-1
    
    while(low<=high){
        var mid=Math.floor((low-high)/2)
        if(arr[mid]==k){
            return arr[mid]
        }
        else if(arr[mid]>k){
            high=mid-1
        }
        else{
            low=mid+1
        }
    }
    return -1
}


function runProgram(input) {
   
   var newInput=input.trim().split("\n")

   var l= +newInput[0]

   var arr=newInput[1].trim().split(" ").map(Number)
   var k=  +newInput[2]

   console.log(l,arr,k);

   console.log(findNo(arr,k,l));
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`4
    1 3 5 6
    2`);
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