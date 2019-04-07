modifyArray = nums => {
  let modifiedArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      let result = nums[i] * 2;
      modifiedArray[i] = result;
    } else {
      nums[i] * 3;
      let result = nums[i] * 3;
      modifiedArray[i] = result;
    }
  }
  return modifiedArray;
};
console.log(modifyArray([1, 2, 3, 4, 5]));
