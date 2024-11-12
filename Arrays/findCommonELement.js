//find common elements in 3 sorted arrays

let arr = [1, 2, 3, 3, 4, 5, 6, 3, 12, 7];
let arr1 = [4, 12, 5, 7, 8, 9, 3];
let arr2 = [4, 5, 12, 11, 10, 3];

function findCommonElem(arr, arr1, arr2) {
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr[i] === arr1[j]) {
        for (let k = 0; k < arr2.length; k++) {
          if (arr[i] === arr2[k]) {
            arrNew.push(arr[i]);
          }
        }
      }
    }
  }
  let arrFiltered = arrNew.filter(
    (value, index) => arrNew.indexOf(value) === index
  );
  return arrNew.length === 0 ? "No common elements" : arrFiltered;
}
//the last part is done by filtering to avoid .includes in the arrNew....
//it might be better than searching/iterating the arrNew everytime
console.log(findCommonElem(arr, arr1, arr2));
