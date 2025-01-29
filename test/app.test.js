const request = require("supertest");
const server = require("../server");

let app;

beforeAll(async () => {
	await new Promise((resolve) => server.once("listening", resolve));
	const port = server.address().port;
	app = `http://localhost:${port}`;
}, 10000);

afterAll(() => {
	server.close();
});

test("GET /add/1/2 should return 3", async () => {
	const response = await request(app).get("/add/1/2");
	expect(response.body.result).toBe(3);
});

test("GET /subtract/5/3 should return 2", async () => {
	const response = await request(app).get("/subtract/5/3");
	expect(response.body.result).toBe(2);
});

test("GET /multiply/3/4 should return 12", async () => {
	const response = await request(app).get("/multiply/3/4");
	expect(response.body.result).toBe(12);
});

test("GET /divide/10/2 should return 5", async () => {
	const response = await request(app).get("/divide/10/2");
	expect(response.body.result).toBe(5);
});

test("GET /divide/10/0 should handle division by zero", async () => {
	const response = await request(app).get("/divide/10/0");
	expect(response.body.result).toBe(undefined);
});
