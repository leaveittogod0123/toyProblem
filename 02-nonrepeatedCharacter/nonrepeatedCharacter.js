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

    // 체크 객체를 만들어서 동적으로 프로퍼티를 추가할 저장 객체를 만듬.
    let checkCharacter = {};
    // 리턴할 넌리핏티드문자를 저장할 변수 만듬.
    let nonRepeatedCharacter;

    for(const char of string){
        if( !checkCharacter[char] ){
            //체크 객체에 없는 문자면 동적으로 프로퍼티를 만들고 값을 1로 해주기.
            checkCharacter[char] = 1;
        }else{
            // 체크 객체에 있는 문자는 반복되었기 때문에
            // 기존 값에 1 갱신해서 몇번 문자가 나왔는지 기억함.
            checkCharacter[char] = checkCharacter[char] + 1;
        }
    }

    for (const char of string) {
        //0번 문자부터 순차적으로 보면서 1번만 체크된 문자 저장하고
        if(checkCharacter[char] === 1){
            // 첫번째로 한번만 체크된 문자가
            // 넌리피티드문자가 될것이니 기록하고
            nonRepeatedCharacter = char;
            // 더이상 리피티트가 갱신되면 안되므로 for loop 종료
            break;
        }
    }


    return nonRepeatedCharacter;
};
