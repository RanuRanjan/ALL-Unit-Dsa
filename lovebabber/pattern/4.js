var n=5;

var p=""

for(var i=1;i<=n;i++){
    for(var j=1;j<=i;j++){
        p+="*"
    }
    p+="\n"
}
console.log(p);


var a=""

for(var i=1;i<=n;i++){
    for(var j=1;j<=i;j++){
        a+=i
    }
    a+="\n"
}
console.log(a);



var w=""
count =1
for(var i=1;i<=n;i++){
    for(var j=1;j<=i;j++){
        w+=count+" "
        count++
    }
    w+="\n"
}
console.log(w);



var r=""
// count =1
for(var i=1;i<=n;i++){
    for(var j=1;j<=i;j++){
        r+=i-j+1+" "
    }
    r+="\n"
}
console.log(r);


