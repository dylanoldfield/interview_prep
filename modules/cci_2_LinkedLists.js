class LinkedList{
    head; 

    constructor(head = null){
        this.head = head;
        
    }

    append(node){
        if(! this.head){
            this.head = node;
            return;
        }

        let next = this.head;
        while(next.next) next = next.next
        next.next = node;
    }

    delete(value){
        if (this.head.value == value) this.deleteHead()
        let next = this.head.next;
        let prev = this.head;

        while(next.value != value){
            if(next.next){
                prev = next;
                next = next.next;
            } 
            else return
        } 

        prev.next = next.next;
        
    }

    deleteHead(){
        this.head = this.head.next;
    }

    printLL(){
        console.log(this.head.value);
        let next = this.head.next;
        while(next){
            console.log(next.value)
            next = next.next;
        }
    }

   static createFromArray(arr){
        let n1 = new Node(arr[0]);
        let ll = new LinkedList(n1);
        for(let i = 1; i < arr.length; i++){
            ll.append(new Node(arr[i]));
        }
        return ll;

    }
    
}

class Node{ 
    constructor(value, next = null){
        this.value = value;
        this.next = next;
        //this.prev = prev;
    }
}

module.exports = {
    LinkedList : LinkedList,
    Node : Node
};


