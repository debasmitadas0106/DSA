//find max element in 2D Array

let arr = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 20],
  ];
  
  function findMaxElement(arr) {
    let maxElement = -Infinity
    for(let i =0;i<arr.length;i++){
      for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]>maxElement){
          maxElement = arr[i][j]
        }
      }
    }
    return maxElement
  }
  console.log(findMaxElement(arr));
  