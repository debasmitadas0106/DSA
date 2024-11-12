//finding the majority element in an array
//element which appears atleast n/2 times or more where n is the length of the array

//(i) if target is not given

function findMajorityElem(arr) {
  let majCount = Math.floor(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    let count = arr.filter((element) => element === arr[i]).length;
    if (count > majCount) {
      return arr[i];
    }
  }
  return null;
}
//(ii) if target is given
function findMajorityTargetElem(arr, target) {
  let majCount = Math.floor(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    let count = arr.filter((element) => element === target).length;
    if (count > majCount) {
      return true;
    }
  }
  return false;
}

let arr = [12, 12, 12, 1, 1];
let target = 12;
console.log(findMajorityTargetElem(arr, target));
