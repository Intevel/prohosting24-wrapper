const ProHosting24 = require("prohosting24-api-wrapper");

async function main() {
	await ProHosting24.stopVServer("serverid", "session_cookie");
}

main();
