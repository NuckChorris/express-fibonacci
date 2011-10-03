What The Fuck?
==============
Well, the idea is that Node needs to make better use of the CPU power on a computer, since it rarely ever hits 50% CPU.

To make up for this woefully inefficient design, I have built this wonderfully helpful middleware that generates the fibonacci sequence recursively, thus using some of your spare CPU power.

Why?
====
Because without a fibonacci generator, Node.js is complete noncancerous shit.

Wait, what?
===========
IDKLOL ASK [TED DZIUBA](http://teddziuba.com/2011/10/node-js-is-cancer.html).

Okay, how do I use it?
======================
First, _install_ it.

	npm install express-fibonacci

Then, `require` it and use it.

	var express = require('express');
	var app = express.createServer();
	var fibonacci = require('express-fibonacci');

	app.use(fibonacci(20)); // Go for 20 iterations

	app.get('/', function (req, res) {
		res.send(req.fibonacci);
	});

	app.listen(3030);