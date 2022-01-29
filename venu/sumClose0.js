let arr= [1,2,6,9,-1,-2]


// TODO: brtue force:

let minL=0;
let minR=1;

let minsum=arr[0]+arr[1]

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        let sum =arr[i]+arr[j]
        if(Math.abs(minsum)>Math.abs(sum)){
                minsum=sum
                minl=i
                minR=j
        }
        
    }
}
console.log(minl,minR);


// TODO: sorting+pointer
