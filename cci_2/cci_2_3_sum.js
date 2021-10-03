var LinkedList = require('/Users/dylan/Library/Mobile Documents/com~apple~CloudDocs/Developer/Code/Interview Prep/modules/cci_2_LinkedLists.js');

l1 = [9,9,9,9]
l2 = [9,9,9]

l1 = LinkedList.LinkedList.createFromArray(l1);
l2 = LinkedList.LinkedList.createFromArray(l2);

sum(l1,l2)

function sum(l1,l2){
    let node_1 = l1.head
    let node_2 = l2.head

    let answer = new LinkedList.LinkedList()
    let carry = 0;
    
    while(node_1 || node_2){
        val_1 = node_1 ? node_1.value : 0; 
        val_2 = node_2 ? node_2.value : 0; 
        
        let a = new LinkedList.Node((val_1 + val_2 + carry) % 10);
        answer.append(a);
        carry = (val_1 + val_2 + carry) >= 10 ? 1 : 0; 
        
        node_1 = (! node_1) ? null : node_1.next;
        node_2 = (! node_2) ? null : node_2.next;
    }

    if(carry == 1){
        answer.append(new LinkedList.Node(1));
    }

    answer.printLL()
}

function sum_rev(l1,l2){
    let node_1 = l1.head
    let node_2 = l2.head

    let answer = new LinkedList.LinkedList()
    let carry = ((val_1 + val_2 + carry) >= 10) ? 1 : 0;

    val_1 = node_1 ? node_1.value : 0; 
    val_2 = node_2 ? node_2.value : 0; 

    if(carry == 1){
        answer.append(new LinkedList.Node(1));
    }

    answer.append(new LinkedList.Node((val_1 + val_2) % 10));

    node_1 = (! node_1) ? null : node_1.next;
    node_2 = (! node_2) ? null : node_2.next;

    while(node_1 || node_2){
        
        let a = new LinkedList.Node((val_1 + val_2 + carry) % 10);
        answer.append(a);
        
        
        node_1 = (! node_1) ? null : node_1.next;
        node_2 = (! node_2) ? null : node_2.next;
    }

    if(carry == 1){
        answer.append(new LinkedList.Node(1));
    }

    answer.printLL()

}

function recur_sum(node_1, node_2, answer){
    let carry = 0;
    let next_1 = (! node_1) ? null : node_1.next;
    let next_2 = (! node_2) ? null : node_2.next;
    
    if(! node_1 && ! node_2) return [carry, answer];

    [carry, answer] = recur_sum(next_1,next_2);

    val_1 = node_1 ? node_1.value : 0; 
    val_2 = node_2 ? node_2.value : 0; 



}