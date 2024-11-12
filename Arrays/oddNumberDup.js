//find the number occuring odd number of times

let arr = [1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4,5];

function elementsOddTimes(arr) {
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    let count = arr.filter((element) => element === arr[i]).length;
    if (count % 2 !== 0 && !arrNew.includes(arr[i])) {
      arrNew.push(arr[i]);
    }
  }
  return arrNew;
}

console.log(elementsOddTimes(arr));