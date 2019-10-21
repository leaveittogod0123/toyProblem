/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function (string) {
  // Your code here.
  let storage = {};

  function recurse(anagrams, currentString) {
    if (anagrams.length === string.length) {
      storage[anagrams] = true;
      return;
    }

    for (let i = 0; i < currentString.length; i++) {
      let current = currentString.slice(0, i);
      let letter = currentString.slice(i + 1);
      recurse(anagrams + currentString[i], current + letter);
    }
  }

  recurse('', string);
  return Object.keys(storage);
};

var result = allAnagrams('apps');
console.log(result);