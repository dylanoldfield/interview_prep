var LLClass= require('/Users/dylan/Library/Mobile Documents/com~apple~CloudDocs/Developer/Code/Interview Prep/modules/cci_2_LinkedLists.js');



let l = [10,7,6,5,4,2,6,1];
let ll = LLClass.LinkedList.createFromArray(l);
partition(ll,6);

function partition(linkedList, partition){
    let head = linkedList.head;
    let next = head.next; 
    let prev = head;
    
    while(next){
        if(next.value < partition){ 
            prev.next = next.next;
            next.next = head;
            linkedList.head = next;
            head = linkedList.head;
            next = prev.next;
            
            
        }else{
            prev = next;
            next = next.next;
        }

    }

    linkedList.printLL();
}



