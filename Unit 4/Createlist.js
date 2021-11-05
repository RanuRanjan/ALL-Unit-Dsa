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
    append(data){
        let newNode={
            value:data,
            next:null
        }
      this.tail.next=newNode;
      this.tail=newNode
      this.length++
    }
}

const myList=new LinkedList(10)
myList.append(15)
myList.append(20)
myList.append(26)

console.log(myList);