function Occurence(n){
 
  var obj ={"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0}
    for(var i=0;i<n.length;n++){
        if(obj[n[i]]===undefined){
            obj[n[i]] =1
        }
        else{
            obj[n[i]] += 1
        }

      
    }
    var allpair=[]
    for(i in obj){
        allpair.push(obj[i])
    }

    // console.log(obj[i]);
console.log(allpair.join(" "));

}

function runProgram(input) {
      var newInput=input.trim().split("\n")

      for(let i=1;i<newInput.length;i+=2){
          var num= newInput[i+1].trim().split("").map(Number)
        //   console.log(num);
        Occurence(num)
      }
 }
 if (process.env.USERNAME === "ranus") {
    runProgram(`2
    5
    1321
    6
    235452`);
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