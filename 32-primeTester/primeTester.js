/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if(typeof n !== 'number' || n <= 1 || n % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }

  // TODO: return true if n is prime, false otherwise

  var upperLimit = Math.sqrt(Math.abs(n));
  for (var i = 2; i <= upperLimit; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

//소수 판별 === 에라토스테네스의 체
var setPrime = function(n){
  if(typeof n !== 'number' || n <= 1 || n % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    return [];
  }

  // TODO: return true if n is prime, false otherwise

  let arr = new Array(n+2).fill();
  let upperLimit = Math.sqrt(Math.abs(n));
  arr[1] = true;
  for (let i = 2; i <= upperLimit; i++) {
    if(!arr[i]){
      for(let j = i+i; j<=n; j+=i){
        arr[j] = true;
      }
    }
  }
  return arr;
}

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
  let primes = setPrime(end);
  let ans = [];
  for(let i=start; i<=end; i++){
    if(!primes[i] && !ans.includes(i)){
      ans.push(i);
    }
  }
  return ans;
};

