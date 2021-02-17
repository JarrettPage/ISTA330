/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  let triangle = [];
  for (var i=1; i<=n; i++) {
    let arr = [];
    for (var j=0; j<i; j++) {
        if (j == 0 || j == i - 1) {
            arr.push(1);
        }
        else {
            arr.push((triangle[i-2][j-1] + triangle[i-2][j]));
        }
    }
    triangle.push(arr);
  }
return triangle;

};