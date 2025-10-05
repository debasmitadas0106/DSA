const nums = [5, 3, 8];
const map = new Map();

for (let i = 0; i < nums.length; i++) {
  map.set(nums[i], i); // store number → its index
  console.log(`Step ${i}: Added ${nums[i]} -> ${i}`);
  console.log("Map now:", map);
}
