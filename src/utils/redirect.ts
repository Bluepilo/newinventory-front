import CryptoJS from "crypto-js";

const decryptToken = async (authToken: string) => {
	let token = authToken.replace(/\s/g, "+");
	console.log(token, "TOKKKSS");
	let bytes = CryptoJS.AES.decrypt(token, "bluepilo");
	const decrypted = await JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
	console.log(decrypted, "DECRYPTED!!!");
	if (decrypted?.token) {
		localStorage.setItem("@accesstoken", decrypted.token);
	}
	return decrypted?.token;
};

export { decryptToken };
