/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str){
    let set = new Set();
    let checks = {};

    for(const ch of str){
        set.add(ch);
    }

    const uniqset = [...set];
    const ans = [];


    function solve(arr, idx){
        if(idx === arr.length){
            let ansStr = "";
            for(const key in checks){

                if(checks[key]){
                    ansStr = ansStr.concat(uniqset[key]);
                }
            }
            ans.push(ansStr);
            return;
        }

        //선택함
        checks[idx] = true;
        solve(arr,idx+1);
        checks[idx] = false;

        //선택안함.
        solve(arr,idx+1)

    }

    solve(uniqset,0);
    return ans;
}
