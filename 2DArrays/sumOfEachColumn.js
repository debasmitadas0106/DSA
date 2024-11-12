//summation of elements in column in 2D array

let arr = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 20],
];

function sumOfElementsInColumn(arr) {
  let columnSum = [];
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[j][i];
    }
    columnSum.push(sum);
  }
  return columnSum;
}
console.log(sumOfElementsInColumn(arr));
