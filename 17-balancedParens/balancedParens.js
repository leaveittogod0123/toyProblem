/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input){

    //stack의 기본문제
    //push Array.prototype.push
    //pop Array.prototype.pop

    let st = [];

    for(const ch of input){
        if( ch === '[' || ch === '{' || ch === '('){
            st.push(ch);
        }else if( ch ===']'){
            if( st.length && st[st.length-1] === '['){
                st.pop();
            }else{
                return false;
            }
        }else if( ch ==='}'){
            if( st.length && st[st.length-1] === '{'){
                st.pop();
            }else{
                return false;
            }
        }else if( ch ===')'){
            if( st.length && st[st.length-1] === '('){
                st.pop();
            }else{
                return false;
            }
        }
    }

    return st.length === 0;

};

