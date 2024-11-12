// find the thirs largest element

function findThirdLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third && arr[i] !== first && arr[i] !== second) {
      third = arr[i];
    }
  }
  return third === -Infinity ? "no third largest" : third;
}

let arr = [2, 5, 5, 5, 3];

console.log(findThirdLargest(arr));
