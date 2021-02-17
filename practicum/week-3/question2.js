
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
    var maxSum = 0;
    var currentSum = 0;
    for(var i = 0; i<input.length; i++){ 
        currentSum = Math.max(input[i], currentSum + input[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
};