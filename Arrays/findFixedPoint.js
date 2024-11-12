// finding a fixed point in an array
//finding the index whose value equals the index

function findFixedPOint(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i) {
      arr2.push(i);
    }
  }
  return arr2;
}

let arr = [1, 2, 4, 3, 4];
