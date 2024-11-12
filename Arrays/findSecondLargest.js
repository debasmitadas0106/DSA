//find the second largest element in an array

//unsorted

function findSecondLargest(arr) {
    if (arr.length < 2) return null;
    let first = 0;
    let second = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > first) {
        second = first;
        first = arr[i];
      } else if (arr[i] > second && arr[i] !== first) {
        second = arr[i];
      }
    }
    return second;
  }
  let arr2 = [2, 4, 5, 6, 7, 7];
  let arr = [0, 4, 3, 6, 6, 1, 5, 7, 7, 8];
  //onsole.log(findSecondLargest(arr2));
  
  // sorted with duplicates
  
  function findSecondLargestElem(arr) {
    if (arr.length < 2) return null;
    let largest = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
      if (arr[i] < largest) {
        return arr[i];
      }
    }
  }
  
  console.log(findSecondLargestElem(arr2));
  