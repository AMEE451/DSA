let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
function search2DArray(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === target) {
          return true; 
        }
      }
    }
    return false;
  }
  console.log(search2DArray(matrix,target)); 
