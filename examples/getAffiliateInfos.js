const ProHosting24 = require("prohosting24-api-wrapper");

async function main() {
	var affiliateInfos = await ProHosting24.getAffiliateInfos("session_cookie");
}

main();
