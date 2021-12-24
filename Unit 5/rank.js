function rank(arr,k){
    var rank=[]
    rank.push(1)
    var score=1;
    for(var i=0;i<arr.length;i++){
        j=i-1
        if(arr[j]===arr[i]){
            rank.push(score)
        }
        else{
            score=i+1
            rank.push(score)
        }
    }

    var ranking=0
    for(var i=0;i<arr.length;i++){
        if(rank[i]<k){
            ranking++
        }
    }
    console.log(ranking);
   
}



function runProgram(input) {
    var newInput=input.trim().split("\n")
    for(var i=1;i<newInput.length;i+=2){
        var k= +newInput[i]
        var arr=newInput[i+1].trim().split(" ").map(Number)
        

        console.log(arr);
        rank(arr,k)
    }
   
  }
  if (process.env.USERNAME === "ranus") {
     runProgram(`1
     5 3
     2 2 2 2 1 `);
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