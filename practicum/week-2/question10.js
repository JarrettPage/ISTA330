/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var digits = Array.from(String(n), Number);
    var sum = (Math.max.apply(null, digits)) - (Math.min.apply(null, digits));
    return sum;
};