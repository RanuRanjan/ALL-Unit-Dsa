// async function api(){
//     return new Promise (resolve =>{
//         setTimeout (()=>{resolve ("b")},50)
//     })
// }

// async function log(){
//     setTimeout (()=>console.log("a"),10)
//     console.log(await api());
//     console.log('c');
// }
// log()

var a=8;
var b= a++ + a++ + a++;
console.log(a);



var c=3
var d= (--c)  + (c=10)
console.log(d);



var m;
var z=true;
var y=false;
var v=10;
var n=5;
var l=((v|n)+(z+y))
console.log(l);


function o(s,r){
var  s=s-1;
if(s==0){
    return 1
}
var r=r+1;
return o(r,s)*r
}

console.log(o(5,5));