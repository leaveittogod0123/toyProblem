/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, _target) {
  // Your code here:

    function binarySearch(arr, low, high, target) {
        if (high < low)
            return null;

        let mid = Math.floor((low + high)/2);
        if (target === arr[mid])
            return mid;

        if (target > arr[mid])
            return binarySearch(arr, (mid + 1), high, target);

        // else
        return binarySearch(arr, low, (mid -1), target);
    }

    function findPivot(arr, low, high){
        if ( high < low) return -1;
        if ( high === low) return low;

        let mid = Math.floor((low + high)/2);
        if( mid < high && arr[mid] > arr[mid+1])
            return mid;

        if( mid > low && arr[mid] < arr[mid-1])
            return (mid-1);

        if( arr[low] >= arr[mid])
            return findPivot(arr, low, mid-1);

        return findPivot(arr, mid+1, high);
    }


    const length = rotated.length-1;
    let pivot = findPivot(rotated, 0, length);
    if( pivot === -1) return binarySearch(rotated, 0, length, _target);

    if( rotated[pivot] === _target) return pivot;

    if(rotated[0] <= _target) return binarySearch(rotated, 0, pivot-1, _target);

    return binarySearch(rotated, pivot+1, length, _target);

};

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 1));

