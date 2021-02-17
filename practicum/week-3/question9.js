/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

function sumDigits(digit){
    var arr = [];
    var depth = 10;
    while(digit>=1){
      var num = digit%depth;
      arr.push(num);
      digit-=num;
      depth*=10;
    }
    return arr;
  }
  
  function nDigits(digit){
    var highestSize = 0;
    var numHighest = 0;
    for(var i=1; i<=digit; i++){
      var size = sumDigits(i).length;
      if(size>highestSize){
        numHighest=1;
        highestSize=size;
      }
      else{
        numHighest++;
      }
    }
    return numHighest;
  }


var largestGroupsCount = function(n) {
    return nDigits(n) % 10;
};