var arr =[2,8,1,4,6,7]

let n=arr.length
for(var i=0;i<n-1;i++){
    for(var j=0;j<n-i-1;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
    
}
console.log(arr);