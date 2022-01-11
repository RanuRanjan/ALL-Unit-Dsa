

var n=6;


for(var i=65;i<=90;i++){
    // console.log(String.fromCharCode(i));
}


var str=""

for(var i=1;i<=n;i++){
    for(var j=0;j<i;j++){
        str+= String.fromCharCode(j+65)
    }
    str+="\n"
}
console.log(str);


var str=""

for(var i=1;i<=n;i++){
    for(var j=0;j<i;j++){
        str+= String.fromCharCode(i+65-1)
    }
    str+="\n"
}
console.log(str);


var str=""
var count=0
for(var i=1;i<=n;i++){
    for(var j=0;j<i;j++){
        str+= String.fromCharCode(count+65)
        count++
    }
    str+="\n"
}
console.log(str);