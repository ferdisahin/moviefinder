/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		apiURL: 'https://moviefinder-rho.vercel.app'
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.themoviedb.org'
			}
		]
	}
};

export default nextConfig;
