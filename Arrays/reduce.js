//Find the sum of all numbers in an array.
let numbers = [10, 20, 30, 40];

let accSum = numbers.reduce((prev, curr) => prev + curr, 0);

//Find the maximum number in an array.

let maxNum = numbers.reduce(
  (prev, curr) => (prev > curr ? prev : curr),
  -Infinity
);

//Count the occurrences of each letter in a string.
let str = "banana";
let countOfChar = str.split("").reduce((prev, curr) => {
  prev[curr] = (prev[curr] || 0) + 1; // Increment the count for the letter
  return prev;
}, {});

//flatten an array into a single array

let arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let flattenedArr1 = arrays.reduce((prev, curr) => [...prev, ...curr], []);

let flattenedArr2 = arrays.reduce((prev, curr) => prev.concat(curr), []);
let flattenedArr3 = arrays.reduce((prev, curr) => {
  prev.push(...curr); // Spread `curr` so elements are added individually
  return prev; // Return the modified array
}, []);

//MY SOLUTION FOR 1ST LEVEL NESTING
let flattenedArr = arrays.reduce((prev, curr) => {
  curr.map((e) => prev.push(e));
  return prev;
}, []);

// Group people by age.
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 36 },
];

let groupedByAge = people.reduce((prev, curr) => {
  prev[curr.age] = prev[curr.age] || []; // Initialize an empty array if not present
  prev[curr.age].push(curr.name); // Push name into the corresponding age group
  return prev; // Return the updated accumulator
}, {});
console.log(groupedByAge);

//Calculate total price of items in a shopping cart.
let cart = [
  { name: "Laptop", price: 1000, quantity: 2 },
  { name: "Mouse", price: 50, quantity: 3 },
  { name: "Keyboard", price: 80, quantity: 1 },
];
let totalCartVal = cart.reduce(
  (prev, curr) => prev + curr.price * curr.quantity,
  0
);

//Find the longest word in an array of words.
let words = ["apple", "banana", "strawberry", "grape"];
let longestWord = words.reduce(
  (prev, curr) => (prev.length > curr.length ? prev : curr),
  0
);
console.log(longestWord);

//Find the product of all numbers in an array.
let number = [2, 3, 4, 5];
let productOfElem = numbers.reduce((prev, curr) => prev * curr, 1);
console.log(productOfElem);

// Convert an array of objects into a single object (merge properties).
let objArray = [{ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 }];
let mergedObjects = objArray.reduce((prev, curr) => {
  return { ...prev, ...curr };
}, {});
console.log(mergedObjects);

//Find the most frequent element in an array.
let items = ["apple", "banana", "apple", "orange", "banana", "apple"];
let frequencyCounter = items.reduce((prev, curr) => {
  prev[curr] = (prev[curr] || 0) + 1;
  return prev;
}, {});
console.log(frequencyCounter);

let mostFrequent = Object.keys(frequencyCounter).reduce((prev, curr) =>
  frequencyCounter[prev] > frequencyCounter[curr] ? prev : curr
);
console.log(mostFrequent);

//Transform an array of key-value pairs into an object.
let keyValuePairs = [
  ["name", "Alice"],
  ["age", 25],
  ["city", "New York"],
];
let keyVal = keyValuePairs.reduce((prev, curr) => {
  prev[curr[0]] = curr[1];
  return prev;
}, {});
console.log(keyVal);

//Compute the total scores of students and return a new array with names and total scores.
let students = [
  { name: "Alice", scores: [80, 90, 85] },
  { name: "Bob", scores: [75, 95, 88] },
  { name: "Charlie", scores: [90, 85, 92] },
];
let result34 = students.reduce((prev, curr) => {
  let totalScore = curr.scores.reduce((sum, score) => sum + score, 0);
  prev.push({ name: curr.name, totalScore });
  return prev;
}, []);

//Count occurrences of each word in a sentence.
let sentence = "this is a test this is only a test";

let arr = sentence.split(" ");
console.log(arr);
let result = arr.reduce((prev, curr) => {
  prev[curr] = (prev[curr] || 0) + 1;
  return prev;
}, {});
console.log(result);

let mostFrequentWord = Object.keys(result).reduce((a, b) =>
  result[a] > result[b] ? a : b
);
console.log(mostFrequentWord);

//Merge multiple arrays inside an array into one without using .flat().
let nestedArrays = [[1, 2], [3, 4, 5], [6]];

let flattenedArray1 = nestedArrays.reduce((prev, curr) => {
  curr.map((e) => prev.push(e));
  return prev;
}, []);
