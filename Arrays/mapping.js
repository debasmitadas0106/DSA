// Map an array to return the double of each element of the array
let arr = [2, 4, 5, 7];

let result = arr.map((element) => {
  return element * 2;
});

// Map an array to return each value converted into a string

let result1 = arr.map((element) => {
  return element.toString();
});

// Map an array to return squares of each element

let result2 = arr.map((element) => {
  return element ** 2;
});

// Map an array to return squares of each element

let result3 = arr.map((element, index) => {
  return element + index;
});

// Map an array to print odd for even based on the elements

let result4 = arr.map((element) => {
  if (element % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
});

// Map an array return the product of element with their respective indeces

let result5 = arr.map((element, index) => {
  return index * element;
});

// Map an array to return true or false based on a condition
//condition: elements are greater than 5

let result6 = arr.map((element) => {
  if (element > 5) {
    return true;
  } else {
    return false;
  }
});
let resultOr = arr.map((element) => element > 5);

// map and return the length of elements
let ar2 = ["cat", "bat", "love", "god"];

let result7 = arr.map((element) => {
  return element.length;
});

// map and return a sentence

let result8 = arr.map((element) => `Hi ${element}`);

// extracting initials of strings of array
let result9 = arr.map((element) => element[0]);

let arr3 = ["Debasmita Roy", "Ankan Ghosh", "Sona Das", "Gulu Mondal"];

let result10 = arr.map((element) =>
  element
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("")
);

let resulto = arr.map(
  (element) =>
    element
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join(".") + "."
);

//reversing each element
let result11 = arr.map((element) => {
  let reversed = "";
  for (let i = element.length - 1; i >= 0; i--) {
    reversed += element[i];
  }
  return reversed;
});

// mapping an object and saving the respective values inside the keys of each array named after its key

const data = [
  { name: "Debasmita", age: 25, city: "Kolkata" },
  { name: "Ankan", age: 27, city: "Delhi" },
  { name: "Sayantani", age: 24, city: "Mumbai" },
];

const resultant = {};
data.map((item) => {
  Object.keys(item).forEach((key) => {
    if (!resultant[key]) {
      resultant[key] = [];
    }
    resultant[key].push(item[key]);
  });
});

//Map an array to return (element * 2) + 1 for each element.

let arrsdf = [45, 65, 34, 87];

let resultsdf = arr.map((element) => {
  return element * 2 + 1;
});

//Map an array to return elements only if they are greater than 5, otherwise return null.

let arrer = [5, 6, 3, 8];

let resulgdft = arr.map((element) => (element > 5 ? element : null));

// return the length of the elements and its index
let ret = arr.map((item, index) => {
  return { length: item.length, index: index };
});

//format times in an array from YYYY-MM-DD format to DD/MM/YYYY
let dates = [
  "2024-08-15",
  "2023-12-25",
  "2022-05-10",
  "2025-01-01",
  "2021-07-04",
];

let formattedDates = dates.map((date) => {
  let [year, month, day] = date.split("-"); // Split the date string
  return `${day}/${month}/${year}`; // Rearrange to DD/MM/YYYY
});
//Map an array of sentences to return each word reversed but in the same order.
let arrOfSentences = [
  "Sam is my junior",
  "Ankan is my boyfriend",
  "Debasmita is my soulmate",
];

let data1 = arrOfSentences.map((item) => {
  let arrNew = [];
  let entity = item.split(" ");
  entity.map((e) => {
    let reversed = "";
    for (let i = e.length - 1; i >= 0; i--) {
      reversed += e[i];
    }
    arrNew.push(reversed);
  });
  return arrNew.join(" ");
});

//Map an array to return the cumulative sum at each index.
let sum = 0;
let cumulativeSum = arr.map((e) => (sum += e));

// Map an array of objects to return an array of key-value pairs for each object.
let arr54 = [
  {
    name: "Debasmita",
    role: "Backend Developer",
    organization: "Google LLC",
  },
  {
    name: "Ranita Saha",
    role: "Frontend Developer",
    organization: "Deloitte",
  },
  {
    name: "Katha Sur",
    role: "Business Analyst",
    organization: "Airtel",
  },
];

let result67 = arr54.map((item) => Object.entries(item));

//---- OR-------

let keyValueArray = obj.map((item) => {
  let keyValuePairs = [];
  for (let key in item) {
    keyValuePairs.push([key, item[key]]);
  }
  return keyValuePairs;
});

//Map an array of numbers to return each as a percentage of the sum of all elements.

function percentageOfItemsInArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let percentOfItems = arr.map((item) => {
    return (item * 100) / sum;
  });
  return percentOfItems;
}

console.log(percentageOfItemsInArray(arr));

//Map an array to return elements only at even indices.
let itemsAtEvenIndex = arr.map((item, index) => {
  if (index % 2 == 0) {
    return item;
  } else {
    return null;
  }
});

//Map an array of sentences to return the number of words in each sentence.

let sentence = [
  "I am spiritual",
  "Love is delusional",
  "Lord Vishnu is the only saviour",
];

let wordCount = sentence.map((item) => {
  let sum = 0;
  sum += item.split(" ").length;
  //sum+=entity.length
  return sum;
});
console.log(wordCount);

//Map an array of objects to return strings
let objectofNames = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

let stringifiedObj = objectofNames.map((item) => {
  return Object.entries(item)
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ");
});

//Map an array of strings to return a string made of their first and last characters.
let arrOfNames = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

let abbre = arr.map((item)=>{
  let name = ""
  name+=item[0]
  name+=item[item.length-1]
  return name
})
console.log(abbre);

