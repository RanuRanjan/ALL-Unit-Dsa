function equal(a,b){
    var obj={}
    var obj1={}
    for(var i=0;i<a.length;i++){
        if(obj[a[i]]===undefined){
            obj[a[i]]=1
        }
        else{
            obj[a[i]]+=1
        }
    }
    for(var i=0;i<b.length;i++){
        if(obj1[b[i]]===undefined){
            obj1[b[i]]=1
        }
        else{
            obj1[b[i]]+=1
        }
    }


   console.log( shallowEqual(obj,obj1));

    function shallowEqual(object1, object2) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if (keys1.length !== keys2.length) {
          return "No";
        }
        for (let key of keys1) {
          if (object1[key] !== object2[key]) {
            return "No";
          }
        }
        return "Yes";
      }
}





    function runProgram(input) {
      var newInput = input.split("\n");
     
      for(var i=1;i<newInput.length;i+=3){
          var str1=newInput[i+1].trim().split("")
          var str2=newInput[i+2].trim().split("")
          console.log(str1,str2);
          equal(str1,str2)
      }
    }
    if (process.env.USERNAME === "ranus") {
      runProgram(`2
      2
      ab
      ac
      3
      aba
      aab`);
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
    