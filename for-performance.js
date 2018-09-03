"use strict";
var n = 10000;  // number of for loop iterations
// execution time of for loop with var counter
var startTime = Date.now();
for (var i = 0; i < n; i++) {
}
var endTime = Date.now();
console.log("Execution time for " + n + " iterations using var counter: " + (endTime - startTime));
