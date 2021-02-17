/*
Given two integer arrays input1 and input2, 
and the integer d, return the d-count 
between the two arrays.

The d-count is defined as 
the number of elements input1[i] such that 
there is not any element input2[j] 
where |input1[i]-input2[j]| <= d.

Example:
input: input1 = [2,1,26,3], input2 = [-5,-2,10,-3,7], d = 6
output: 1
*/

/*
In other words, subtract each element in array 1 from each element in array 2. Count how many
elements in array 1 are greater than d even after the subtractions.
*/
var d_count = function(input1, input2, d) {
    var count = 0;
    var current = 0;
    for(var i=0; i<input1.length; i++){
        var tooMuch = 0;
        current = input1[i];
        for(var j=0; j<input2.length; j++){
            if((current - input2[j]) <= d){
                tooMuch++;
            }
        }
        if(tooMuch == 0){
            count++;
        }
    }
    return count;
};