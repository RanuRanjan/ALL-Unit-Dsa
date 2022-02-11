// function fibonacci(n){
//     var seq=[0,1,1,2,3,5]
//     for(var i=2;i<=n;i++){
//         seq.push(seq[i-1]+seq[i-2])
//     }
//     return seq[seq.length-1]
    
// }



function fib(n){
    if(n==0){
        return 0;

    }
    if(n==1 || n==2){
        return 1
    }
    return fib(n-1)+fib(n-2)
}