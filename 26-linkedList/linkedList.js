/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  //fill me in!
    this.tail = null;
    this.head = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value){

    var newTail = this.makeNode(value);
    if (!this.head) {
        this.head = newTail;
    }
    if (this.tail) {
        this.tail.next = newTail;
    }
    this.tail = newTail;

};

LinkedList.prototype.removeHead = function(){
    //head가 있다.

    var currentHead = this.head;
    if (!currentHead) {
        return null;
    }
    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.head = this.head.next;
    }
    return currentHead.value;
};

LinkedList.prototype.contains = function(value){
    let node = this.head;
    while(node){
        if( node.value === value)
            return true;

        node = node.next;
    }

    return false;
};

LinkedList.prototype.makeNode = function(value){
    return {
        value,
        next: null
    };
};
