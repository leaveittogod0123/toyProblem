/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

var translateRomanNumeral = function (romanNumeral) {
// TODO: Implement me!
    let pre, cur, sum = 0;

    if ()
    if (!romanNumeral) return 0;

    if (romanNumeral.length === 1) {
        return DIGIT_VALUES[romanNumeral[0]];
    } else if (romanNumeral.length === 2) {
        pre = romanNumeral[0];
        cur = romanNumeral[1];
        if (DIGIT_VALUES[pre] >= DIGIT_VALUES[cur]) {
            sum += DIGIT_VALUES[pre] + DIGIT_VALUES[cur];
        } else {
            sum += DIGIT_VALUES[cur] - DIGIT_VALUES[pre];
        }
    } else {

        pre = romanNumeral[0];
        for (let i = 1; i < romanNumeral.length; i++) {
            cur = romanNumeral[i];

            if (i + 1 === romanNumeral.length) {
                if (DIGIT_VALUES[pre] >= DIGIT_VALUES[cur]) {
                    sum += DIGIT_VALUES[cur];
                } else {
                    sum += DIGIT_VALUES[cur] - DIGIT_VALUES[pre];
                }
            } else {
                if (DIGIT_VALUES[pre] >= DIGIT_VALUES[cur]) {
                    sum += DIGIT_VALUES[pre];
                } else {
                    sum += DIGIT_VALUES[cur] - DIGIT_VALUES[pre];
                }
            }

            pre = cur;
        }
    }
    return sum;
}


    console.log(translateRomanNumeral("VII"));