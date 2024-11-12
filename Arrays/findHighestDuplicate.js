//Last duplicate element in a SORTED array
//what a ridiculous solution but good thought process
function findMaxDup(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr2.push(arr[i]);
    }
    let array = arr.filter((item) => item !== arr[i]);
    findMaxDup(array);
  }
  return arr2[arr2.length - 1];
}
//this was like too much overthinking... to not have duplicates in the arr2
console.log(findMaxDup(arr));
console.log(arr);

// finding highest duplicate in an sorted array
function findMaxDupSorted(arr){
  let arr2=[]
  for(i=0;i<arr.length;i++){
    if(arr[i]==arr[i+1]){
      arr2.push(arr[i])
    }
  }
  return arr2[arr2.length-1]
}

// find the duplicate highest number in an array
//correct solution
function findMaxDupUnsorted(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    const count = arr.filter((item) => item === arr[i]).length;
    if (count > 1 && !arr2.includes(arr[i])) {
      arr2.push(arr[i]);
    }
  }
  if (arr2.length === 0) return "no duplicates";
  let num = arr2[0];
  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > num) {
      num = arr2[i];
    }
  }
  return num;
}
let arr = [1, 2, 3, 5, 6, 4, 4, 6, 7, 8, 6];
console.log(findMaxDupUnsorted(arr));
