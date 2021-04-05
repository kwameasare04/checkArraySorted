const a = [5, "abc", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

/*
Create a function "arrayCheck" with one parameter - "inputArray".

If at least one element in the array is not a number - return "Some elements are not numbers".

If numbers in the array are sorted in ascending order - return "Array is sorted is ascending order".

If numbers in the array are sorted in descending order - return "Array is sorted is descending order".

If array is not sorted - return "Array is not sorted"
*/

const arrayCheck = inputArray => {
  
  if(inputArray.some(item => typeof item !== "number"))
  return "Some elements are not numbers";
  
  if(inputArray.every((element,index,array) => index > 0 
  ? element >= array[index - 1]: true)){
    return "index is in ascending order";
    /// using ternary operator to check if that element is on the first index, 
    /// if it is returns true, the checks to see if the elements is higher the the
    // previous by subtracting one from the index. 
  }
  if(inputArray.every((element,index,array) => index > 0 
  ? element <= array[index - 1]: true)){
    return "index is in descending order";
  }
else 
return "array is not sorted";


}

  


  
  






console.log(arrayCheck(a)); // Some elements are not numbers
console.log(arrayCheck(b)); // Array is sorted is ascending order
console.log(arrayCheck(c)); // Array is sorted is descending order
console.log(arrayCheck(d)); // Array is not sorted

/* Hint 1: Use "every" helper method to solve this.

Hint 2: You should use all three parameters in the callback function "element", "index", "array".

Hint 3: Each element in the array except first one should be compared to the previous
*/
