const ProHosting24 = require("prohosting24-api-wrapper");

async function main() {
	var serverinfo = await ProHosting24.getVServerInfo("serverid", "session_cookie");
}

main();
