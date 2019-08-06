/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  // 문자열 리턴
  // string1을 기준으로 string2에 들어온 것을
  // 체크하면서 string1의 문자가 또 들어왔으면
  // 그걸 리턴할 문자열에 concat해주자.

  // 그런데 답을 내는 방법이 정해져있음.
  // string1을 0~n-1번째까지 for loop
  // 그리고 해당 문자가 string2에 있으면 concat이다.

  let ans = "";
  for (const char1 of string1){
      for(const char2 of string2){
          if( char2 === char1){
              ans.concat(char2);
          }
      }
  }
  return ans;
};
