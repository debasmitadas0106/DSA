// find the element that is found once in an array

let arr = [1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 3, 4];

function uniqueElement(arr) {
  let counts = {};
  arr.forEach((element) => {
    counts[element] = (counts[element] || 0) + 1;
  });
  for (let element in counts) {
    if (counts[element] === 1) {
      return parseInt(element);
    }
  }
  return null;
}

console.log(uniqueElement(arr));
