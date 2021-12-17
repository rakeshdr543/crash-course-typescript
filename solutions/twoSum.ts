// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = (arr: number[], target: number): number[] => {
  const numIndexes: { [key: string]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    let temp = target - arr[i];

    if (numIndexes[temp] !== undefined && numIndexes[temp] !== i) {
      return [numIndexes[temp], i];
    }
    numIndexes[arr[i]] = i;
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
