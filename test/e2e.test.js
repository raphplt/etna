const puppeteer = require("puppeteer");
const server = require("../server");

let browser, page;
let appUrl;

beforeAll(async () => {
	await new Promise((resolve) => server.once("listening", resolve));
	const port = server.address().port;
	appUrl = `http://localhost:${port}`;

	browser = await puppeteer.launch();
	page = await browser.newPage();
	await page.goto(appUrl);
}, 10000);

afterAll(async () => {
	await browser.close();
	server.close();
});

test("should display the sum of two numbers", async () => {
	await page.type("#input1", "5");
	await page.type("#input2", "3");
	await page.click("#calculate");

	const result = await page.$eval("#result", (el) => el.textContent);
	expect(result).toBe("8");
});
