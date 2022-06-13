function fizzBuzz(n) {
	if (n % 15 === 0) {
		return "FizzBuzz";
	} else if (n % 5 === 0) {
		return "buzz";
	} else if (n % 3 === 0) {
		return "fizz";
	} else {
		return n;
	}
}

function fizzBuzzTo100() {
	for (i = 1; i <= 100; i++) {
		console.log(fizzBuzz(i));
	}
}

function handleClick() {
	console.log("hello");
}

module.exports = { fizzBuzz, fizzBuzzTo100, handleClick };
