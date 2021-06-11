import fetch from "node-fetch";
import { URLSearchParams } from "url";

export async function getVServerInfo(server_id: string, session_cookie: string) {
	if (!server_id) throw new Error("Please provide a server id");
	if (!session_cookie) throw new Error("Please provide a session_cookie");
	const params = new URLSearchParams();
	params.append("sessionid", session_cookie);
	params.append("id", server_id);
	params.append("vserver_id", server_id);

	var response = await fetch("https://intern.api.prohosting24.de/", {
		method: "post",
		body: params,
		headers: { "Content-Type": "application/x-www-form-urlencoded", function: "getvserverinfos" },
	});
	return response.json();
}

export async function startVServer(server_id: string, session_cookie: string) {
	if (!server_id) throw new Error("Please provide a server id");
	if (!session_cookie) throw new Error("Please provide a session_cookie");
	const params = new URLSearchParams();
	params.append("sessionid", session_cookie);
	params.append("id", server_id);
	params.append("vserver_id", server_id);

	var response = await fetch("https://intern.api.prohosting24.de/", {
		method: "post",
		body: params,
		headers: { "Content-Type": "application/x-www-form-urlencoded", function: "vserverstart" },
	});
	return response.json();
}

export async function stopVServer(server_id: string, session_cookie: string) {
	if (!server_id) throw new Error("Please provide a server id");
	if (!session_cookie) throw new Error("Please provide a session_cookie");
	const params = new URLSearchParams();
	params.append("sessionid", session_cookie);
	params.append("id", server_id);
	params.append("vserver_id", server_id);

	var response = await fetch("https://intern.api.prohosting24.de/", {
		method: "post",
		body: params,
		headers: { "Content-Type": "application/x-www-form-urlencoded", function: "vserverstop" },
	});
	return response.json();
}

export async function getCreditHistory(session_cookie: string) {
	if (!session_cookie) throw new Error("Please provide a session_cookie");
	const params = new URLSearchParams();
	params.append("sessionid", session_cookie);

	var response = await fetch("https://intern.api.prohosting24.de/", {
		method: "post",
		body: params,
		headers: { "Content-Type": "application/x-www-form-urlencoded", function: "getCreditHistory" },
	});
	return response.json();
}

export async function getAffiliateInfos(session_cookie: string) {
	if (!session_cookie) throw new Error("Please provide a session_cookie");
	const params = new URLSearchParams();
	params.append("sessionid", session_cookie);

	var response = await fetch("https://intern.api.prohosting24.de/", {
		method: "post",
		body: params,
		headers: { "Content-Type": "application/x-www-form-urlencoded", function: "affiliateinfos" },
	});
	return response.json();
}

export async function getOwnTickets(session_cookie: string) {
	if (!session_cookie) throw new Error("Please provide a session_cookie");
	const params = new URLSearchParams();
	params.append("sessionid", session_cookie);

	var response = await fetch("https://intern.api.prohosting24.de/", {
		method: "post",
		body: params,
		headers: { "Content-Type": "application/x-www-form-urlencoded", function: "getownsupporttickets" },
	});
	return response.json();
}
