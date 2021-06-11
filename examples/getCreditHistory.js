const ProHosting24 = require("prohosting24-api-wrapper");

async function main() {
	var creditHistory = await ProHosting24.getCreditHistory("session_cookie");
}

main();
