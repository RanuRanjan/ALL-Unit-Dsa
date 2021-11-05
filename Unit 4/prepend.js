// let LinkedList={
//     head:{
//         value:10,
//         next:{
//             value:11,
//             next:{
//                 value:15,
              
//             }
//         }
//     }
// }

// console.log(LinkedList);


class LinkedList{
    constructor(data){
        this.head={
            value:data,
            next:null
        },
      this.tail=this.head
      this.length=1;
    }
    prepend(data){
        let newNode={
            value:data,
            next:null
        }
      newNode.next=this.head
      this.head=newNode
      this.length++
    }
}

const myList=new LinkedList(10)
myList.prepend(10)
myList.prepend(11)
myList.prepend(9)
console.log(myList);