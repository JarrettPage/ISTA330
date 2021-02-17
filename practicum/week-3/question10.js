/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    var current = 0;
    var index = 0;
    var minDiff = Number.POSITIVE_INFINITY;
    var list = [];
    var diff = 0;
    input.sort(function(a, b){return a - b});
    for(var i=0; i<input.length; i++){
        current = input[i];
        for(var j=i; j<input.length; j++) {
            if(j == i){
                continue;
            }
            else{

                diff = Math.abs(current - input[j]);
                if(diff < minDiff){
                    minDiff = diff;
                }
            }
        }
    }
    for(var i=0; i<input.length; i++){
        current = input[i];
        for(var j=i; j<input.length; j++) {
            var arr = [];
            if(j == i){
                continue;
            }
            else{
                if(Math.abs(current - input[j]) == minDiff){
                    arr.push(current);
                    arr.push(input[j]);
                    list.push(arr);
                }
            }
        }
    }
    return list;
};