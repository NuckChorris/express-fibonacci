module.exports = function (num) {
  function fibonacci(n, done) {
    if (n < 2) {
      done(1);
    } else {
      process.nextTick(function() {
        fibonacci(n - 2, function(val1) {
          fibonacci(n - 1, function(val2) {
            done(val1 + val2);
          });
        });
      });
    }
  }
  return function (req, res, next) {
    fibonacci(num, function(value) {
      req.fibonacci = value;
      next();
    });
	}
}
