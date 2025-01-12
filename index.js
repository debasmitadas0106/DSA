// removing duplicates from an array without creating a new one

let arr = [1, 1, 3, 2, 5, 5, 6];

function removeDupElem(arr) {
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arrNew.includes(arr[i])) {
      arrNew.push(arr[i]);
    } else {
      arr.splice(arr[i], 1);
    }
  }
  return arr;
}

console.log(removeDupElem(arr))

// const input = "7289787-Vodex_1726745890824";
// const encoded = Buffer.from(input).toString('base64');
// console.log(encoded);
