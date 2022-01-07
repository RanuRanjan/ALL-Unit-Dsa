// var no=122323424254365465768769870964556364654n
// // console.log(Number.MAX_SAFE_INTEGER);
// // console.log(no);

// // string immutable
// // var name="   yash    "
// // name.trim()
// // console.log(name);

// var arr=[123]
// console.log(typeof(null));

// console.log((Array.isArray(no)));
// arr 
// var numm= +prompt("Please enterbfcfn")
// var arr=[1,"hi","gg"]


// const gg=document.querySelector("div")

// console.log(gg.getAttribute("class","hi"));
// gg.setAttribute("class","hi")
// console.log(gg.getAttribute("class"));




// function random(){
//     const red=Math.floor(Math.random()*256)
//     const b=Math.floor(Math.random()*256)
//     const c=Math.floor(Math.random()*256)
//    const allcolor=`rgb(${red},${b},${c})`
//     return allcolor
// }


// function changebg(){
//     const genrater=random()

//     body.style.backgroundColor=genrater
// }



const product=[
    {
        productId:1,productname:"tesla",price:200
    },
    {
        productId:2,productname:"bmw",price:300
    },
    {
        productId:3,productname:"vm",price:50
    }

]

const lowhigh=product.slice(0).sort((a,b)=>{
    return  a.price -b.price
})
const highlow=product.slice(0).sort((a,b)=>{
    return  b.price -a.price
})
console.log(highlow);
console.log(lowhigh);
console.log(product)


//  function comapare( a, b ) {
//     if ( a.productname < b.productname ){
//       return -1;
//     }
//     if ( a.productname > b.productname ){
//       return 1;
//     }
//     return 0;
//   }
  
// console.log(  product.sort( comapare ));

// console.log(sortpro);

