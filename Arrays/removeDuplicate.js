//removing duplicates from an array

function removeDup(arr) {
    let arrFiltered = arr.filter((value, index) => arr.indexOf(value) === index);
    return arrFiltered;
  }
  let arr = [1, 2, 4, 4, 5, 6];
  console.log(removeDup(arr));
  
function removeDupNew(arr){
  for (let i = 0;i<arr.length;i++){
    for(let j = i+1;j<arr.length;j++){
      if (arr[i]==arr[j]){
        arr.splice(j,1)
      }
    }
  }
} 