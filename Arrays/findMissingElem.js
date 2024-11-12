// find the lost element in a duplicate array
//distince characters
let arr = [2, 4, 3, 7, 8, 9];
let arr1 = [2, 4, 3, 8, 9];

function findMissingELem(arr, arr1) {
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr1.includes(arr[i])) {
      arrNew.push(arr[i]);
    }
  }
  return arrNew;
}

console.log(findMissingELem(arr, arr1));
