function higherBound(n, k, arr) {
    var low = 0;
    var high = n - 1;
    var ans = -1;
    while (low <= high) {
      mid = low + Math.floor((high - low) / 2);
      if (arr[mid] ==k){
          ans = mid
        low = mid + 1;
      }
      else if(arr[mid]>k) {
          high = mid -1;
      }
      else {
          low = mid +1
      }
      }  
      return ans
   
    
  };
 function  lowerBound (n, k, arr) {
    var low = 0;
    var high = n - 1;
    var ans = -1;
    while (low <= high) {
      mid = low + Math.floor((high - low) / 2);
      if (arr[mid] == k) {
          ans = mid
  high = mid -1;
      }
       else if(arr[mid] >k)
       {
        high = mid -1;
      }
      else {
          low = mid + 1;
      }
    }
    
    return ans
    
  };
  
 
 function Occurence (n,k,arr){
    lowerbound = lowerBound(n,k , arr)
    upperbound = higherBound(n,k, arr)
    // console.log(lowerbound);
    // console.log(upperbound);
    if (lowerbound == -1) {
        return 0
    }
       
    var  res = upperbound - lowerbound + 1
    return res
  }
  
  function runProgram(input) {
    var newInput = input.trim().split("\n");
    var num = newInput[0].trim().split(" ").map(Number);
    var arr = newInput[1].trim().split(" ").map(Number);
  
    var n = +num[0];
    var k = +num[1];
  
    console.log(Occurence(n, k, arr));
  }
  
  if (process.env.USERNAME === "ranus") {
    runProgram(`6 3
    2 3 3 3 6 9`);
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