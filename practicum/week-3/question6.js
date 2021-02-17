/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    var highest = 0;
    var m = -1;
    var pos = -1;
    var current = 0;
    for(var i=0; i<input.length; i++){
        current = input[i];
        var count = 0;
        for(var j=0; j<input.length; j++){
            if(current == input[j]){
                count++;
            }
        }
        if(count > highest){
            highest = count;
            pos = i;
        }
    }
    if(highest > (input.length/2)){
        m = input[pos];
    }
    return m;
};