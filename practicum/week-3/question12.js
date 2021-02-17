/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/
function fib(num,first,second) { 
    if (num == 0){
      return first; 
    }
    if (num == 1){
        return second; 
    }
    return fib(num - 1, second, first+second); 
  }
var F = function(n) {
   return fib(n-2, 1, 2);
};