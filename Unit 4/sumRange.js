
function range(n){
    if(n==1){
        return 1

    }
    return n+range(n-1)
}

console.log(range(3));