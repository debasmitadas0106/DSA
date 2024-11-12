//check existence of an target element in an array
function checkExistence(arr, target) {
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      arrNew.push(arr[i]);
    }
  }
  if (arrNew.length > 0) {
    return arrNew;
  }
  return false;
}
let arr = [4, 12, 11, 10];
let target = 3;
console.log(checkExistence(arr, target));
