/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'

*/

var maxBalanceNumber = function(input) {
  var balance = 0;
  var twos = [];
  var partitions = [];
  if(input.length % 2 == 0) {
    for(var i=0; i<input.length-1; i+=2){
      var sub = input[i] + input[i+1];
      twos.push(sub);
    }
    for(var j=0; j<twos.length; j++){
      var current = twos[j];
      if(j != twos.length-1){
        var next = twos[j+1];
        if(current[0] != current[1]){
          partitions.push(current);
        }
        else{
          if(next[0] != current[0] && next[1] != current[1]){
            var combine = current + next;
            partitions.push(combine);
          }
        }
      }
      else {
        if(current[0] != current[1]){
          partitions.push(current);
        }
      }
    }
  }
  //aa,ab,ab,bb,a
  else {
    var last = input[input.length-1];
    for(var i=0; i<input.length-2; i+=2){
      var sub = input[i] + input[i+1];
      twos.push(sub);
    }
    twos.push(last);
    for(var j=0; j<twos.length; j++){
      var current = twos[j];
      if(j != twos.length-1){
        var next = twos[j+1];
        if(current[0] != current[1]){
          partitions.push(current);
        }
        else{
          if(next.length == current.length && (next[0] != current[0] && next[1] != current[1])){
            var combine = current + next;
            partitions.push(combine);
          }
        }
      }
      else {
        var previous = twos[j-1];
        var letter = previous[1];
        if(current != previous[1]){
          partitions.push(letter + current);
        }
      }
    }
    //partitions.push("ab");
  }
  return partitions.length;
};