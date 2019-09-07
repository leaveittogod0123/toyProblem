/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {

  this.data = [];

  // add an item to the top of the stack
  this.push = function(input){
    //this.data = [...this.data, input];
    this.data.push(input);
  };

  // remove an item from the top of the stack
  this.pop = function(){
    //
    const output = this.data.pop();
    // this.data = [...this.data];
    return output;
  };

  // return the number of items in the stack
  this.size = function(){
    return this.data.length;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  //inbox, outbox가 버퍼의 의미인가... 뭐지 모르겠네.

  // called to add an item to the `queue`
  this.enqueue = function(input){
    // TODO: implement `enqueue`
    while(outbox.size()){
      inbox.push(outbox.pop());
    }
    inbox.push(input);
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
    while(inbox.size()){
      outbox.push(inbox.pop());
    }
    return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function(){
    // TODO: implement `size`
    return inbox.size() || outbox.size();
  };
};
