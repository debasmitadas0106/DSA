//summation of elements in diagonal in 2D array

let arr = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 1],
];

function findDiagonalSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i];
  }
  return sum;
}
console.log(findDiagonalSum(arr));
