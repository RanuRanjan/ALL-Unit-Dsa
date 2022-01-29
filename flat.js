var arr=[2,3,5,[2,3,[1,6,9,[1,[8]]]]]
console.log(arr.toString());

function  flat(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="[" || arr[i]=="]"){
            continue;
        }
        else{
            res.push(arr[i])
        }
    }
    console.log(res)
}

function flat1(arr){
    console.log(this.toString());
}
flat1(arr)

flat(arr)