function BinarySearch(k,arr,low,high,mid){
       while(low<=high){
        if (arr[mid]){
            return mid
      }
      else if(arr[mid]<k){
          low=mid+1
      }
      else{
          high=mid-1
      }
       }
    
 return -1

}



function runProgram(input) {
   
   var newinput=input.trim().split("\n")

   var testcase= newinput[0].split(" ")
   var l = +testcase[0]
   var k= +testcase[1]
//    console.log(l,k);

   var arr=newinput[1].trim().split(" ").map(Number)
//    console.log(arr);
   var low= 0
   var high= arr.length-1
   var mid = low+Math.floor(high-low)/2

//    console.log(low,high,mid);
  console.log(BinarySearch(k,arr,high,low,mid));
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`5 0
    2 -2 0 3 4`);
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