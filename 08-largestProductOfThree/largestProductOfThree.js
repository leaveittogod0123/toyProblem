/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
    // TODO: everything
    // ans 만들고 0번값 저장
    // 1번부터 ans =ans * 1번
    // 반복
    // reduce 활용법 공부

    // 모두 음수일경우에는 가장 큰 작은 음수에 -1을 더해줘요. 맞는지 모르겠음.
    // 문제 이해를 못하고 풀었음..
    // 양수가 있을 경우에는 음수를 양수로 뒤집고 큰 세개의 수만 곱해서 리턴해줘요.

    let EveryNegativeflag = array.every( (currentValue) => {
        return currentValue < 0;
    });

    if(EveryNegativeflag){

        array.sort();

        let ans = array.sort()[array.length-1] -1;

        return ans;

    }

    // 음수가 있을때는 양수로 바꿔줘요.

    let nArray = array.map( (value) => {
        if( value < 0){
            value = value*-1;
        }
        return value;
    });



    // 큰수가 앞으로 오게 내림차순해요.
    nArray.sort( ( a,b ) => b-a );

    console.log(nArray);


    return nArray.reduce((acc,cur,i) => {

        if(i >= 3){
            return acc;
        }

        return acc * cur;
    });

};
