//check existence of an target element in an array
function checkExistence(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return "target element exists";
    }
  }
  return false;
}
let arr = [3, 12, 11, 10];
let target = 3;
console.log(checkExistence(arr, target));

// for target element more than 1

let arr1 = [2, 5, 4, 6, 8, 2, 6, 6, 9];
let targets = [2, 12];

function findManyTargetElem(arr, target) {
  let arrNew = [];
  for (let i = 0; i < target.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (target[i] === arr[j]) {
        arrNew.push(1);
        break;
      }
      if (j == arr.length - 1) {
        arrNew.push(0);
      }
    }
  }
  return arrNew;
}

console.log(findManyTargetElem(arr1, targets));

// but this process uses double iteration, so we will be using flag

let arr2 = [2,5,6,6,7,4,6,9]

function findManyTarWithFlag(arr, target){
  let newArr = []
  for (let i = 0; i < target.length; i++){
    let flag = false
    for(let j =0;j<arr.length;j++){
      if(target[i]===arr[j]){
        flag = true,
        newArr.push(1)
        break;
      }
    }
    if(!flag){
      newArr.push(0)
    }
  }
  return newArr
}

