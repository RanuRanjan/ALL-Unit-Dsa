  function runProgram(input) {
    var newInput = input.trim().split("\n");
    var len= +newInput[0]
//   console.log(len);
    var arr= newInput[1].trim().split(" ").map(Number)
//    console.log(arr);
   if(len>5){
     var  obj={}
     for (var i=0;i<len;i++){
        if (obj[arr[i]]=obj[arr[i]]){
            obj[arr[i]]+=1
        }
        else{
            obj[arr[i]]=1
        }
        
     }
    //  console.log(obj);
    let ar=[]
    for(let key in obj){
    ar.push(+key)
    
    }
    // console.log(arr);

    for(var j=0;j<ar.length;j++){
        for(var k=j+1;k<ar.length;k++){
            if(ar[j]>ar[k]){
                let temp=ar[j]
                ar[j]=ar[k]
                ar[k]=temp
            }
        }
    }

    console.log(ar[0],ar[1],ar[2]);
    console.log(ar[ar.length-3],ar[ar.length-2],ar[ar.length-1]);
    }
    else {
        console.log("Not possible");
        console.log("Not possible");
   }
   
   }

   
  

//   arr.length bara 5 se tbi kamm karega kuki 3 max or 3 min distnict
  if (process.env.USERNAME === "ranus") {
    runProgram(`8
    1 2 3 4 2 1 6 5`);
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
  