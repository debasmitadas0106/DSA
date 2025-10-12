function findIndeces(target, arr) {
  const result = [];
  const seenPairs = new Set();
  for (i = 0; i < arr.length; i++) {
    for (j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        const sortedPair = [Math.min(i, j), Math.max(i, j)].toString(); // Sort to ensure order

        // Check if the sorted pair is already seen
        if (!seenPairs.has(sortedPair)) {
          result.push([i, j]); // Add the indices as a unique pair
          seenPairs.add(sortedPair); // Mark this pair as seen
        }
      }
    }
  }
  return result;
}
// finding the first indeces
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};
