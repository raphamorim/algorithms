// Same as the challenge-018, however using an Array in memory

// [
//   good,
//   good,
//   good,
//   good,
//   good,
//   good,
//   bad
//   bad
// ]

// [
//   good,
//   good,
//   good,
//   bad,
//   bad,
//   bad,
//   bad,
//   bad,
//   bad
// ]

function solution(isBadVersion) {
  return function(arr) {
    function checkVersionBetween(startIndex, lastIndex, accArr) {
      if (startIndex === lastIndex) {
        return arr[startIndex];
      }

      accArr = accArr.splice(lastIndex, arr.length);
      const halfIndex = parseInt(accArr.length / 2);
      const isMiddleBad = isBadVersion(accArr[halfIndex]);
      return isMiddleBad ? checkVersionBetween(startIndex, halfIndex) : checkVersionBetween(halfIndex, arr.length - 1);
    }

    if (isBadVersion(arr[0])) {
      return arr[0];
    }

    return checkVersionBetween(1, n.length - 1);
  };
};
