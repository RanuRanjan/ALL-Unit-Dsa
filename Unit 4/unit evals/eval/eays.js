let res = [];
let n = 4;

function ways(n)
{
    if(n < 0)
    {
        return;
    }
    if(n == 0)
    {
        res.push(1);
        return;
    }
    else{
        return ways(n-1) || ways(n-2) || ways(n-5)
    }
}
 ways(n);
 console.log(res.length)
