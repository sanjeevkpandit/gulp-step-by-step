function f(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}

var result = f(3);
console.log(result);
