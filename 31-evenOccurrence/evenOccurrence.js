
/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
  let obj = {};
  for( const data of arr){
    if(!obj[data]){
      obj[data] = 1;
    }else{
      obj[data] +=1;
    }
  }


  for( const key in obj){
    if( obj[key] % 2 === 0 ){
      return parseInt(key) ? parseInt(key): key; 
      // 문자일경우 parseInt('sth') : NaN 
      // NaN도 true false 중 false를 의미하기 때문에 
      // key가 숫자일때만 parseInt(key)가 숫자로 나와서 true이고
      // key가 문자일때는 NaN이 되서 false로 나옴.
    }
  }

  return null;
};