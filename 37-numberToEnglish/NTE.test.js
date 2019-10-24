import "./NTE";

describe('toEnglish', function () {

    it('should exist on the Number prototype', function () {
        expect(!Number.prototype.toEnglish).toBeFalsy();
        console.log(typeof Number.prototype.toEnglish);
    });

    it('should be a function', function () {
        expect(typeof Number.prototype.toEnglish).toEqual("function");
        // Number.prototype.toEnglish.be.a.Function();
    });

    it('should write single digits', function () {
        expect((0).toEnglish()).toEqual('zero');
        expect((1).toEnglish()).toEqual('one');
        expect((2).toEnglish()).toEqual('two');
        expect((3).toEnglish()).toEqual('three');
        expect((4).toEnglish()).toEqual('four');
        expect((5).toEnglish()).toEqual('five');
        expect((6).toEnglish()).toEqual('six');
        expect((7).toEnglish()).toEqual('seven');
        expect((8).toEnglish()).toEqual('eight');
        expect((9).toEnglish()).toEqual('nine');
    });

    it('should write teens', function () {
        expect((11).toEnglish()).toEqual('eleven');
        expect((12).toEnglish()).toEqual('twelve');
        expect((13).toEnglish()).toEqual('thirteen');
        expect((14).toEnglish()).toEqual('fourteen');
        expect((15).toEnglish()).toEqual('fifteen');
        expect((16).toEnglish()).toEqual('sixteen');
        expect((17).toEnglish()).toEqual('seventeen');
        expect((18).toEnglish()).toEqual('eighteen');
        expect((19).toEnglish()).toEqual('nineteen');
    });

    it('should write tens', function () {
        expect((10).toEnglish()).toEqual('ten');
        expect((20).toEnglish()).toEqual('twenty');
        expect((30).toEnglish()).toEqual('thirty');
        expect((40).toEnglish()).toEqual('forty');
        expect((50).toEnglish()).toEqual('fifty');
        expect((60).toEnglish()).toEqual('sixty');
        expect((70).toEnglish()).toEqual('seventy');
        expect((80).toEnglish()).toEqual('eighty');
        expect((90).toEnglish()).toEqual('ninety');

        // compounds from 21-99 should be hyphenated
        expect((44).toEnglish()).toEqual('forty-four');
        expect((67).toEnglish()).toEqual('sixty-seven');
        expect((99).toEnglish()).toEqual('ninety-nine');
    });

    it('should write hundreds', function () {
        expect((100).toEnglish()).toEqual('one hundred');
        expect((500).toEnglish()).toEqual('five hundred');
        expect((700).toEnglish()).toEqual('seven hundred');

        expect((100).toEnglish()).toEqual('one hundred');
        expect((500).toEnglish()).toEqual('five hundred');
        expect((700).toEnglish()).toEqual('seven hundred');

        expect((275).toEnglish()).toEqual('two hundred seventy-five');
        expect((630).toEnglish()).toEqual('six hundred thirty');
        expect((922).toEnglish()).toEqual('nine hundred twenty-two');
    });

    it('should write thousands', function () {
        expect((1000).toEnglish()).toEqual('one thousand');
        expect((50000).toEnglish()).toEqual('fifty thousand');
        expect((700000).toEnglish()).toEqual('seven hundred thousand');

        expect((5625).toEnglish()).toEqual('five thousand six hundred twenty-five');
        expect((17490).toEnglish()).toEqual('seventeen thousand four hundred ninety');
        expect((355003).toEnglish()).toEqual('three hundred fifty-five thousand three');
        expect((845913).toEnglish()).toEqual('eight hundred forty-five thousand nine hundred thirteen');
    });

    it('should write millions', function () {
        expect((1000000).toEnglish()).toEqual('one million');
        expect((2385024).toEnglish()).toEqual('two million three hundred eighty-five thousand twenty-four');
        expect((973563700).toEnglish()).toEqual('nine hundred seventy-three million five hundred sixty-three thousand seven hundred');
    });

    it('should write billions', function () {
        expect((1000000000).toEnglish()).toEqual('one billion');
        expect((2385024582).toEnglish()).toEqual('two billion three hundred eighty-five million twenty-four thousand five hundred eighty-two');
        expect((973563700353).toEnglish()).toEqual('nine hundred seventy-three billion five hundred sixty-three million seven hundred thousand three hundred fifty-three');
    });

    it('should write very large numbers', function () {
        expect((1000000000000).toEnglish()).toEqual('one trillion');
        expect((1000000000000000).toEnglish()).toEqual('one quadrillion');
        expect((1000000000000000000).toEnglish()).toEqual('one quintillion');
    });

    it('should write MAX_INT', function () {
        // 2^53 = 9,007,199,254,740,992 is the maximum value that JavaScript's 64-bit Number can represent as an integer (non decimal)
        expect((Math.pow(2, 53)).toEnglish()).toEqual('nine quadrillion seven trillion one hundred ninety-nine billion two hundred fifty-four million seven hundred forty thousand nine hundred ninety-two');
    });

    describe('EXTRA CREDIT:', function () {
        it('should write decimals', function () {
            // use the word "and" to indicate the decimal point
            expect((1.5).toEnglish()).toEqual('one and five tenths');
            expect((45.75).toEnglish()).toEqual('forty-five and seventy-five hundredths');
            // don't write zero for decimals
            expect((0.3).toEnglish()).toEqual('three tenths');
            expect((0.25).toEnglish()).toEqual('twenty-five hundredths');
            // one thousandth should be singular
            expect((0.001).toEnglish()).toEqual('one thousandth');
            // decimal place names should be hyphenated to distinguish them
            expect((3.0625).toEnglish()).toEqual('three and six hundred twenty-five ten-thousandths');
            expect((503.0013427734375).toEnglish()).toEqual('five hundred three and thirteen billion four hundred twenty-seven million seven hundred thirty-four thousand three hundred seventy-five ten-trillionths');
        });
    });

});
