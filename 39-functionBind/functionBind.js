/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
 */

var bind = function(func, context) {
  let previousArgs = [].slice.call(arguments, 2);
return function() {
    let currentArgs = [].slice.call(arguments);
    let combinedArgs = [].concat(previousArgs, currentArgs);
    return func.apply(context, combinedArgs);
  }
};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
 */

Function.prototype.bind = function(context) {
  // method is attached to the prototype, so just refer to it as this.
  let func = this;
  let previousArgs = [].slice.call(arguments, 1);

  return function(){
    let currentArgs = [].slice.call(arguments);
    let combinedArgs = [].concat(previousArgs, currentArgs);
    return func.apply(context, combinedArgs);
  };
};

// var func = function() { return this };
// var context = { foo: 'bar' };
// var boundFunc = bind(func, context);
// var result = boundFunc();

// console.log(result, context);