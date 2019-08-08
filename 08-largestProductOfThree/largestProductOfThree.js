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


    // 문제 이해했음.
    // 음수가 있어도 부호와 상관없이 크면 곱해줘야함.

    let sortedArr = array.sort((a,b) => Math.abs(b)-Math.abs(a));

    // 완전탐색, 정렬, 그리디가 있을것 같은데
    // 정렬하고 그리디랑 전략이 비슷함.
    // 일단 완탐을 하면 3개를 뽑아야하니 O(N^3)

    let max = sortedArr[0]*sortedArr[1]*sortedArr[2];

    for(let i = 0; i< sortedArr.length; i++){
        for(let j = i+1; j< sortedArr.length; j++){
            for(let k = j+1; k < sortedArr.length; k++){
                if( max < sortedArr[i] * sortedArr[j] * sortedArr[k]){
                    max = sortedArr[i] * sortedArr[j] * sortedArr[k];
                }
            }
        }
    }

    return max;


};
