const findTriplet = (arr: number[], target: number): number[] => {
  for (let i = 0; i < arr.length - 2; i++) {
    let s = new Set();
    let cur_sum = target - arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (s.has(cur_sum - arr[j])) {
        return [arr[j], arr[i], cur_sum - arr[j]];
      }
      s.add(arr[j]);
    }
  }
  return [];
};

console.log(findTriplet([12, 3, 4, 1, 6, 9], 24));
