function sortedSquares(nums) {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let idx = nums.length - 1;

  while (left <= right) {
    const leftSquare = nums[left] ** 2;
    const rightSquare = nums[right] ** 2;

    if (leftSquare > rightSquare) {
      result[idx] = leftSquare;
      left++;
    } else {
      result[idx] = rightSquare;
      right--;
    }

    idx--;
  }

  return result;
}

const nums = [-4, -1, 0, 3, 10];

const result = sortedSquares(nums);
console.log(result);