/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    var highest = 0;
    var current = 0;
    var d = -1;
    for(var i=0; i<input.length; i++){
        current = input[i];
        var count = 0;
        for(var j=0; j<input.length; j++){
            if(current == input[j]){
                count++;
            }
        }
        if(count == current && count > highest){
            d = count;
            highest = count;
        }
    }
    return d;
};