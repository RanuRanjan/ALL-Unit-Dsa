function runProgram(input) {
    // console.log(process.env.USERNAME);
    var newinput=input.split("\n");
    var num=newinput[0].trim().split(" ").map(Number);
 //    console.log(num);
    var k=Number(num[1]);
 //    console.log(k);
    var data=newinput[1].trim().split(" ").map(Number);
 //    console.log(data);
    var l=0;
    var h=data.length-1;
 //    console.log(h);
    var ans=-1;
 //    console.log(mid);
    while(l<=h){
        mid=Math.floor(l+((h-l)/2));
     //    0+4/2
     //    console.log(mid);
     //    console.log(mid);
        if(data[mid]==k){
         //    console.log(mid);
         ans=mid;
         h=mid-1
        }
        else if(data[mid]>k){
            h=mid-1
        }
        else {
            l=mid+1
        }
     }
     console.log(ans);
   }
   if (process.env.USERNAME === "ranus") {
     runProgram(`5 3
     1 1 2 2 5`);
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