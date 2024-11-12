//removing duplicates from an array

function removeDup(arr) {
    let arrFiltered = arr.filter((value, index) => arr.indexOf(value) === index);
    return arrFiltered;
  }
  let arr = [1, 2, 4, 4, 5, 6];
  console.log(removeDup(arr));
  