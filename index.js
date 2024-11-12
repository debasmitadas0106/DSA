//find the row with max sum  in a 2D array

let arr = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 11]
];

function findRowWithMaxSum(arr) {
  let rowSums = 0
  for (let i =0;i<arr.length;i++){
    let sum = 0
    for(let j=0;j<arr[i].length;j++){
      sum+=arr[i][j]
    }
    if(sum>rowSums){
      rowSums = sum
    }6
  }
  return rowSums
}
console.log(findRowWithMaxSum(arr));