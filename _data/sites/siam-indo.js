module.exports = {
	name: "juruwebsite.com", // optional, falls back to object key
	description: "Juru Website Site",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://siam-indo.com/",
		"https://siam-indo.com/id/beranda",
	]
};
