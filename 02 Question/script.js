function arrangeCoins(n) {
  let left = 0;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const curr = mid * (mid + 1) / 2;

    if (curr === n) {
      return mid;
    } else if (curr < n) {
      left = mid + 1; 
    } else {
      right = mid - 1;
    }
  }

  return right; 
}
const n = 5;

const result = arrangeCoins(n);
console.log(result);
