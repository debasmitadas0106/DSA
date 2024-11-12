// summation of elements in each row in 2D array

let arr = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 20],
];

function sumOfElementsInRow(arr) {
  let rowSums = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    rowSums.push(sum);
  }
  return rowSums;
}

console.log(sumOfElementsInRow(arr));
