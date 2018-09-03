function testMultiplication() {
  var five = new Dollar(5);
  five.times(2);
  assert(five.amount === 10);
}

function assert(condition, message = "Assertion failed!") {
  if(!condition) {
    throw new Error(message);
  }
}