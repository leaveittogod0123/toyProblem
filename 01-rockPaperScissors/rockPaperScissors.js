/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/


var rockPaperScissors = function (cnt) {
    // TODO: your solution here
    const argument = cnt || 0;
    const results = [];

    const box = ['rock', 'paper', 'scissors'];

    function recurse(cnt, played) {
        if(cnt === 0) {
            results.push(played);
            return;
        }

        for(let i = 0; i < box.length; i++) {
            const current = box[i];
            recurse(cnt-1, played.concat(current));
        }
    };

    recurse(argument, []);

    return results;
};

