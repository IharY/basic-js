const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // if (arr.length!=0){
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === '--discard-next') {
  //       if(i!=arr.length-1){
  //         let result = arr.slice(0, i) + "," + arr.slice(i + 2);
  //         if(result!='[]'){
  //           let newArray = result.split(',');
  //           return newArray;
  //         }else {
  //           return undefined;
  //         }
  //       } else{
  //         // return undefined;
  //       }
          
  //     } else if (arr[i] === '--discard-prev') {
  //       if(i!=0){
  //         let result = arr.slice(0, i - 1) + "," + arr.slice(i + 1);
  //         if(result!=='[]'){
  //           let newArray = result.split(',');
  //           return newArray;
  //         }else{
  //           return undefined;
  //         }
          
  //       }else{
  //         // return undefined;
  //       }
  
  //     } else if (arr[i] === '--double-next') {
  //       if(i != arr.length-1){
  //         let result = arr.slice(0, i) + "," + arr[i + 1] + "," + arr.slice(i + 1);
  //         let newArray = result.split(',');
  //         return newArray;
  //       } else{
  //         // return undefined;
  //       }
          
  //     } else if (arr[i] === '--double-prev') {
  //       if(i != 0){
  //         let result = arr.slice(0, i) + "," + arr[i - 1] + "," + arr.slice(i + 1);
  //         let newArray = result.split(',');
  //         return newArray;
  //       } else{
  //         // return undefined;
  //       } 
  //     }
  //   }
  // } else{
  //   return arr;
  // }
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const newArr = [...arr];
  result = [];

  
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === undefined) {
      continue;
    } else if (newArr[i] === "--discard-next") {
      i += 2;
      continue;
    } else if (newArr[i] === "--discard-prev") {
      if (newArr[i - 1] !== undefined) result.pop();
    } else if (newArr[i] === "--double-next") {
      if (newArr[i + 1] !== undefined) result.push(newArr[i + 1]);
    } else if (newArr[i] === "--double-prev") {
      if (newArr[i - 1] !== undefined) result.push(arr[i - 1]);
    } else {
      result.push(newArr[i]);
    }

    
  
  }
  

  return result;
  
}

module.exports = {
  transform
};
