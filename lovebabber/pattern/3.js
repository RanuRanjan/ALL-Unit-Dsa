var n=6;
var ans =""
for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
        ans+= j+1
    }
    ans+="\n";
}
console.log(ans);



var res =""
for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
        res+= n-1- j+1
    }
    res+="\n";
}
console.log(res);



var anss =""
for(var i=1;i<=n;i++){
    for(var j=1;j<=n;j++){
        anss+=j+i-1
    }
    anss+="\n";
}
console.log(anss);