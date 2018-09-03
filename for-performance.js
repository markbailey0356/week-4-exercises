"use strict";
var n = 1e9;  // number of for loop iterations
var startTime, endTime;
var a; // global variable to assign to

// execution time of for loop with var counter
startTime = Date.now();
for (var i = 0; i < n; i++) {
  a = i;
}
endTime = Date.now();
console.log("Execution time for " + n + " iterations using var counter: " + (endTime - startTime));

// execution time of for loop with let counter
startTime = Date.now();
for (let i = 0; i < n; i++) {
  a = i;
}
endTime = Date.now();
console.log("Execution time for " + n + " iterations using let counter: " + (endTime - startTime));
