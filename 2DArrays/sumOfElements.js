// summation of elements in 2D array

let arr = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 20],
];

function sum2DArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}

console.log(sum2DArray(arr));
