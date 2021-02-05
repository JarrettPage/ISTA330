/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    var shuffledWord = '';
    var letters = new Array(shuffleIndices.length);
    for(var i=0; i<shuffleIndices.length; i++) {
        for(var j=0; j<shuffleIndices.length; j++){
            if(shuffleIndices[i] == j){
                letters[j] = input.charAt(i);
            }
        }
    }
    for(var k=0; k<letters.length; k++) {
        shuffledWord += letters[k];
    }
    return shuffledWord;
};