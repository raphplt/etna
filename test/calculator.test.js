const { add, subtract, multiply, divide } = require("../calculator");

test("adds two numbers correctly", () => {
	expect(add(1, 2)).toBe(3);
});

test("subtracts two numbers correctly", () => {
	expect(subtract(5, 3)).toBe(2);
});

test("multiplies two numbers correctly", () => {
	expect(multiply(3, 4)).toBe(12);
});

test("divides two numbers correctly", () => {
	expect(divide(10, 2)).toBe(5);
});

test("throws error on non-numeric addition", () => {
	expect(() => add("a", 3)).toThrow(
		"Invalid input: both arguments must be numbers"
	);
});

test("throws error on division by zero", () => {
	expect(() => divide(5, 0)).toThrow("Invalid input: division by zero");
});
