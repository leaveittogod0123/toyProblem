/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
    if(!string){
        return;
    }

    let firstCharacter = string.charAt(0);
    let nonRepeatedCharacter;
    for (let i = 1; i < string.length; i++){
        if(firstCharacter !== string.charAt(i)){
            nonRepeatedCharacter = string.charAt(i);
            break;
        }
    }
    return nonRepeatedCharacter;
};
