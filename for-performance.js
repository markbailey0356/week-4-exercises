"use strict";
var n = 1e9;  // number of for loop iterations
var startTime, endTime;
var a; // global variable to assign to

// execution time of for loop with var counter with var assignment
startTime = Date.now();
for (var i = 0; i < n; i++) {
  a = i;
}
endTime = Date.now();
console.log("Execution time for " + n + " iterations using var counter and var assignment: " + (endTime - startTime));

// execution time of for loop with let counter with var assignment
startTime = Date.now();
for (let i = 0; i < n; i++) {
  a = i;
}
endTime = Date.now();
console.log("Execution time for " + n + " iterations using let counter and var assignment: " + (endTime - startTime));

// execution time of for loop with var counter with let assignment
startTime = Date.now();
for (var i = 0; i < n; i++) {
  let a = i;
}
endTime = Date.now();
console.log("Execution time for " + n + " iterations using var counter and let assignment: " + (endTime - startTime));

// execution time of for loop with let counter with let assignment
startTime = Date.now();
for (let i = 0; i < n; i++) {
  let a = i;
}
endTime = Date.now();
console.log("Execution time for " + n + " iterations using let counter and let assignment: " + (endTime - startTime));
