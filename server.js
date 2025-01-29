const app = require("./app");
const server = app.listen(0, () => {
	const { port } = server.address();
	console.log(`Server running at http://localhost:${port}`);
});

module.exports = server;
