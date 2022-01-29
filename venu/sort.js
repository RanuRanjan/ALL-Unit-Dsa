let arr=[2,1,6,4,7]


// function buSort(arr){
// let s=0;
// let e=arr.length-1

// while(s<=e){
//     if(arr[s]>arr[e]){
//         let temp
//         temp =arr[s]
//         arr[s]=arr[e]
//         temp=arr[e]
       
        
//     }
    
//     s++;
//     e--;
//     return arr
// }

// }

arr.sort(function(a,b){return a-b})
console.log(arr);
// console.log(buSort(arr));