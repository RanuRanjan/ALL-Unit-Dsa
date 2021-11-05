 function counDown(n){
     for(let i=1;i<=n;i++){
        console.log(i)
     }
 }


 function recCountDown(n){
     if(n<=0){
         console.log("done");
         return; 
     }
     console.log(n);
     n--
     recCountDown(n)
 }


 counDown(7);
 console.log("######");
 recCountDown(8)