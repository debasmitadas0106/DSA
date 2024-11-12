//find the first repeating element in an array
//sorted
function findFirstRepeat(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      return arr[i];
    }
  }
  return "no duplicate";
}

let arr = [1, 2, 2, 3, 4];
console.log(findFirstRepeat(arr));
