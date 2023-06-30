function findTheDistanceValue(arr1, arr2, d) {
  var count = 0;

  for (var i = 0; i < arr1.length; i++) {
    var isValid = true;
    for (var j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      count++;
    }
  }

  return count;
};
const arr1 = [4,5,8]
const arr2 = [10,9,1,8]
const d = 2

console.log(findTheDistanceValue(arr1, arr2, d))
