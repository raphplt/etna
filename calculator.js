function add(a, b) {
	if (isNaN(a) || isNaN(b)) {
		throw new Error("Invalid input: both arguments must be numbers");
	}
	return +a + +b;
}

function subtract(a, b) {
	if (isNaN(a) || isNaN(b)) {
		throw new Error("Invalid input: both arguments must be numbers");
	}
	return +a - +b;
}

function multiply(a, b) {
	if (isNaN(a) || isNaN(b)) {
		throw new Error("Invalid input: both arguments must be numbers");
	}
	return +a * +b;
}

function divide(a, b) {
	if (isNaN(a) || isNaN(b)) {
		throw new Error("Invalid input: both arguments must be numbers");
	}
	if (+b === 0) {
		throw new Error("Invalid input: division by zero");
	}
	return +a / +b;
}

module.exports = { add, subtract, multiply, divide };
