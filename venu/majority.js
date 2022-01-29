var arr =[7,7,8,5,7,6,2,7,7,8,7]


// TODO: Brute force

function major1(arr){
    let max=0;
    let index=-1
for(let i=0;i<arr.length;i++){
    let count=0
    for(let j=0;j<arr.length;j++){
         if(arr[i]==arr[j]){
             count++
         }
    }
    if(count>max){
        max=count
        index=i
    }
}


let majority=Math.floor(arr.length/2)


if(max>majority){
    console.log(arr[index]);
    
}
else{
    console.log("No Majority")
}

}


// TODO: Sorting approach  (nlogn ) (n)
var arr1 =[8,7,7,8,8,7,8,2,7,8,8,7]
function major2(arr){
    arr.sort((a,b)=>{return a-b})
    // console.log(arr);
    let majority= Math.floor(arr.length/2)
    let index=-0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[majority]){
            index=i
        }
       
    }
    console.log(arr[index])
}


// TODO: hashmap (n)(n)
var arr2=[1,2,3,4,4,4,6,4,4]
function major3(arr){
    let obj={}
    for(let i=0;i<arr.length;i++){
         if(obj[arr[i]]==undefined){
             obj[arr[i]]=1
         }
         else{
             obj[arr[i]]+=1
         }
    }
    // console.log(obj);
    let majority= Math.floor(arr.length/2)
    // console.log(majority);
    let max=0
    for(key in obj){
        console.log(obj[key]);
        if(obj[key]>majority){
            max=key
        }
        
    }
    if(max){
        console.log(max)
    }
    else{
        console.log("no majority")
    }
}

// TODO: 


major1(arr)
major2(arr1)
major3(arr2)