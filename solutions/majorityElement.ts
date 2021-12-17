const findMajorityElement = (arr: number[]): number => {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      let count = map.get(arr[i]) + 1;
      if (count > arr.length / 2) {
        return arr[i];
      } else {
        map.set(arr[i], count + 1);
      }
    } else {
      map.set(arr[i], 1);
    }
  }
  return -1;
};

console.log(findMajorityElement([2, 0, 2, 1, 2, 2]));
