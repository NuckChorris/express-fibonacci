module.exports = num => {
  function fibonacci(n, done) {
    if (n < 2) {
      done(1);
    } else {
      process.nextTick(() => {
        fibonacci(n - 2, val1 => {
          fibonacci(n - 1, val2 => {
            done(val1 + val2);
          });
        });
      });
    }
  }
  return (req, res, next) => {
    fibonacci(num, value => {
      req.fibonacci = value;
      next();
    });
	};
}
