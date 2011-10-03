module.exports = function (n) {
	function fibonacci () {
		if (n < 2) {
			return = 1;
		} else {
			return fibonacci(n-2) + fibonacci(n-1);
		}
	}
	return function (req, res, next) {
		req.fibonacci = fibonacci();
		next();
	}
}