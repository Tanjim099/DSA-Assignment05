function findDuplicates(nums) {
    var result = [];
  
    for (var i = 0; i < nums.length; i++) {
      var index = Math.abs(nums[i]) - 1;
      if (nums[index] < 0) {
        result.push(index + 1);
      } else {
        nums[index] = -nums[index];
      }
    }
  
    return result;
  };

  const nums = [4,3,2,7,8,2,3,1]
  
  console.log(findDuplicates(nums));