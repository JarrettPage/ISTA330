/*
An array of integers, input, is given.
A pair (i, j) is called an ordered pair if input[i] < input[j] and i < j.
Return the number of ordered pairs.
Example:
input: [4, 2, 6, 9]
output: 5
There are 5 ordered pairs: (4, 6), (4, 9), (2, 6), (2, 9), (6, 9)
*/

var numberOfOrderedPairs = function(input) {
    let pairs = 0;
    for (var i=0; i<input.length; i++){
        var current = input[i];
        for (var j=0; j<input.length;j++){
            if(current == input[j]){
                continue;
            }
            else{
                if(current<input[j] && i<j){
                    pairs += 1;
                }
            }
        }
    }
    return pairs;
}