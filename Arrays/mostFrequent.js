//most frequent element in an array
let arr = [2, 2, 2, 22, 22, 2, 2, 22, 2, 5, 5, 6, 7, 4,6,7,7,7,3];

function mostFrequent(arr) {
  let frequency = {};

  arr.forEach((element) => {
    frequency[element] = (frequency[element] || 0) + 1;
  });
  let mostFrequent = null;
  let maxCount = 0;

  for (const [key, value] of Object.entries(frequency)) {
    if (value > maxCount) {
      maxCount = value;
      mostFrequent = key;
    }
  }
  return mostFrequent;
}

console.log(mostFrequent(arr));

//less frequent element in an array

function mostFrequent(arr) {
  let frequency = {};

  arr.forEach((element) => {
    frequency[element] = (frequency[element] || 0) + 1;
  });
  let mostFrequent = null;
  let maxCount = Infinity;

  for (const [key, value] of Object.entries(frequency)) {
    if (value < maxCount) {
      maxCount = value;
      mostFrequent = key;
    }
  }
  return mostFrequent;
}

console.log(mostFrequent(arr));
