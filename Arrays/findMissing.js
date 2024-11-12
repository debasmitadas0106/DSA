// find missing integers from an array(numbers are consecutive)

let arr = [1, 3, 4, 5, 7];

function findMissing(arr) {
  let arrNew = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1] + 1) {
      arrNew.push(arr[i - 1] + 1);
    }
  }
  return arrNew;
}

console.log(findMissing(arr));
