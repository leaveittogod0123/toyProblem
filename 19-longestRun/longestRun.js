/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
    // TODO: Your code here!
    let max = -1;
    let obj = {};
    let curEle = string[0];
    let start = 0, end = 0;
    for (let i = 0; i < string.length; i++) {
        if (curEle !== string[i]) {
            end = i-1;
            let tmp = [start, end];
            if (!obj[curEle]) {
                obj[curEle] = [];
            }
            obj[curEle].push(tmp);

            curEle = string[i];
            start = end = i;
        }
    }

    for (const i in obj) {
        for(const idx of obj[i]){

            let startIdx = idx[0];
            let endIdx = idx[1];

            if (max === -1 || endIdx - startIdx > max[1] - max[0]) {
                max = idx;
            }
        }

    }

    return max = (max === -1) ? [0,0] : max;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

console.log(longestRun('abc'));
