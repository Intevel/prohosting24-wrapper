const ProHosting24 = require("prohosting24-api-wrapper");

async function main() {
	var ownTickets = await ProHosting24.getOwnTickets("session_cookie");
}

main();
