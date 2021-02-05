/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    let result = 0;

    input.sort(function(a,b){
      return a-b;
    });
  
    var middle = Math.floor(input.length / 2);
  
    if (input.length % 2){
      result = input[middle];
    }
    else {
    result = (input[middle - 1] + input[middle]) / 2.0;
    }
    return result;
};