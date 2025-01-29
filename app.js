const express = require("express");
const path = require("path");
const calculator = require("./calculator");

const app = express();

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add/:a/:b", (req, res) => {
	const result = calculator.add(req.params.a, req.params.b);
	res.json({ result });
});

app.get("/subtract/:a/:b", (req, res) => {
	const result = calculator.subtract(req.params.a, req.params.b);
	res.json({ result });
});

app.get("/multiply/:a/:b", (req, res) => {
	const result = calculator.multiply(req.params.a, req.params.b);
	res.json({ result });
});

app.get("/divide/:a/:b", (req, res) => {
	const result = calculator.divide(req.params.a, req.params.b);
	res.json({ result });
});

module.exports = app;
