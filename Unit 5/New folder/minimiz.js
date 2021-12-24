function compare(arr){
    var ass=[]
    for(var i=arr.length-1;i>=0;i--){
        ass.push(arr[i])
    }
    return ass
}
function recompare(arr){
    var ass1=[]
    for(var i=0;i<arr.length;i++){
        ass1.push(arr[i])
    }
    return ass1
}

function sort(arr1){
    var arr= arr1.map(Number)
    var arr3=[]
  
     for(var i=0;i<arr.length;i++){
         
         if( arr[0]== "-"){
           arr3.push(compare(arr))
           break;
         }
         else{
            arr3.push(recompare(arr))
         }
     }
     console.log(arr3.join(" "));

}

function runProgram(input) {
   
    var newInput=input.trim().split("\n")
    // console.log(input);
   for(var i=1;i<newInput.length;i++){
       var arr=newInput[i].trim().split("")
    //    console.log(arr);
       sort(arr)
   }
   

 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`2
    53334121
    -1002911
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