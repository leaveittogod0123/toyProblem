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

LinkedList.prototype.addToTail = function(num){

    let node = this.makeNode(num);

    // head null tail null
    if( !this.head && !this.tail){
        this.head = this.tail = node;
    }
    // head null tail not null
    else if( !this.head && this.tail){
        //이런 경우는 없음 removeTail이 없음
    }

    // head not null tail null
    else if( this.head && !this.tail){
        this.head.next = this.tail = node;
    }

    // head not null tail not null
    else{
        this.tail.next = node;
    }
};

LinkedList.prototype.removeHead = function(){
    //head가 있다.
    if(this.head){
        let tmp = this.head.value;
        this.head = this.head.next;
        return tmp;
    }else{
        return null;
    }
};

LinkedList.prototype.contains = function(num){
    let node = this.head;
    while(node){
        if( node.value === num)
            return true;

        node = node.next;
    }

    return flag;
};

LinkedList.prototype.makeNode = function(num){
    return {
        value: num,
        next: null
    };
};
