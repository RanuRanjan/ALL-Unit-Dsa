function sort(arr) {
    
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}


function runProgram(input) {
   
    var newInput=input.trim().split("\n")

    let arr1= newInput[1].trim().split(" ").map(Number)
    let arr2= newInput[2].trim().split(" ").map(Number)

    // console.log(arr1);

    let arrmerge=[]
    arrmerge=[...arr1,...arr2]
    // console.log(arrmerge);
    sort(arrmerge)
    console.log(arrmerge);
    // var  row=4
  
}
if (process.env.USERNAME === "ranus") {
   runProgram(`4
   1 5 7 9
   2 4 6 8`);
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