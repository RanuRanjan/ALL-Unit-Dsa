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
   traverse(req){
       let counter=0
       let currentNode=this.head
       while(counter!=req){
           counter++
           currentNode=currentNode.next
       }
       return currentNode
   }


   insert(index,data){
       const newNode={
           value:data,
           next:null
       }
       const leaderNode=this.traverse(index-1)
       const nextNode=leaderNode.next
       leaderNode.next=newNode
       newNode.next=nextNode
   }
   
}

const myList=new LinkedList(15)
myList.append(10)
myList.append(11)
myList.append(9)
myList.insert(1,16)
console.log(myList);