/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cimacleaners.com.au",
				pathname: "/wp-content/**",
			},
			{
				protocol: "https",
				hostname: "magenta-dotterel-745114.hostingersite.com",
				pathname: "/wp-content/**",
			},
		],
	},
};

export default nextConfig;
