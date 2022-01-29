function minimumsearch(arr,k) {
   
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == k) {
            return mid;
        }
        else if (arr[low] < arr[mid]) {
           
            if (k >= arr[low] && k < arr[mid]) high = mid - 1;
            else low = mid + 1;
        }
         else {
           
            if (k > arr[mid] && k <= arr[high]) low = mid + 1;
            else high = mid - 1;
        }
    }

    return -1;
    
}


function runProgram(input) {
   
    var newInput=input.trim().split("\n")
    // var  row=4
    var [len,k]=newInput[0].trim().split(" ").map(Number)
    var arr=newInput[1].trim().split(" ").map(Number)
    console.log(arr);
    console.log(minimumsearch(arr,k));
}
if (process.env.USERNAME === "ranus") {
   runProgram(`5 1
   3 4 5 1 2 `);
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