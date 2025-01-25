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
let resultOr = arr.map(element=> element>5)

// map and return the length of elements
let ar2 = ["cat", "bat", "love", "god"];

let result7 = arr.map((element) => {
return element.length
});

// map and return a sentence 

let result8 = arr.map(element => `Hi ${element}`);

// extracting initials of strings of array
let result9 = arr.map(element => element[0]);

let arr3 = ["Debasmita Roy", "Ankan Ghosh", "Sona Das", "Gulu Mondal"];

let result10 = arr.map((element) =>
  element
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("")
);

//reversing each element
let result11 = arr.map((element) => {
    let reversed = ""
    for(let i =element.length-1;i>=0;i--){
      reversed+= element[i]
    }
    return reversed
  });
   

