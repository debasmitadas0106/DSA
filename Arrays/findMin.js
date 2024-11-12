//program to find out the minimum number in an array (unsorted)
//approaches:
// 1. Search the entire array to match and update the maximum/minimum number
// 2. sort the array into ascending or descending order to find the first or last element
// 3. Heaps: I dont understand it yet.. But soon I will

function findMin(arr) {
  if (arr.length === 0) return "not possible";
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
let arr = [];

console.log(findMin(arr));
