/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fakestoreapi.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'unsplash.com',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
