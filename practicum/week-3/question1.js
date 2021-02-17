/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
        var maxNum = Math.max.apply(null, input);
        var boolNum = 0;
        for(var i=0; i<input.length; i++){
                if (input[i] == maxNum){
                        continue;
                }
                else {
                        if ((input[i] * 2) > maxNum){
                                boolNum++;
                        }
                }
        }
        return Boolean(boolNum == 0);
};