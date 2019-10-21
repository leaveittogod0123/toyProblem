/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

const toFraction = (number) => {
    // Your code here

    if (number === 0) {
        return '0/1';
    }

    let data = String(number);
    let negative = data[0] === '-';

    if (negative) data = data.substring(1, data.length);

    let dot = data.indexOf('.');
    let top = data.substring(0, dot);
    let bottom = data.substring(dot + 1, data.length);



    if (dot !== -1) {

        let denominator; // 분모
        let numerator; // 분자

        if( top === '0'){
            if(top === '0') top = '1';
            for (let i = 0; i < bottom.length; i++) {
                top = top.concat('0');
            }
        }else{

            let tmp = top + bottom;
            for (let i = 0; i < bottom.length; i++) {
                top = top.concat('0');
            }

            bottom = tmp;
        }

        numerator = parseInt(top);
        denominator = parseInt(bottom);

        let res = gcd(numerator, denominator);

        if (negative) return `-${denominator / res}/${numerator / res}`;
        else return `${denominator / res}/${numerator / res}`;


    } else { // 82.0

        let denominator = '1'; // 분모
        let numerator = bottom; // 분자

        if (negative) return `-${numerator}/${denominator}`;
        else return `${numerator}/${denominator}`;
    }


};

const gcd = (a, b) => {
    let n;

    if (a < b) [a, b] = [b, a];

    while (b !== 0) {
        n = a % b;
        a = b;
        b = n;
    }

    return a;
}

console.log(toFraction(0.25));