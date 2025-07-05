/** @type {import('next').NextConfig} */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
	output: 'export',
	productionBrowserSourceMaps: false,
	experimental: {
		// optimizePackageImports: [
		// 	'@react-three/drei',
		// 	'@react-three/fiber',
		// 	'@studio-freight/react-lenis',
		// 	'three',
		// 	'three-custom-shader-material',
		// ],
	},

	images: {
		unoptimized: true,
	},

	webpack: config => {
		config.resolve.alias = {
			...config.resolve.alias,
			three$: path.resolve('./src/aliases/three.js'),
			'three-stdlib$': path.resolve('./src/aliases/three.js'),
			'./webxr/WebXRManager.js': path.resolve('./src/aliases/three.js'),
			// '@monogrid/gainmap-js': path.resolve('./src/aliases/three.js'),
		};

		config.mode = 'production';

		config.optimization = {
			...config.optimization,
			splitChunks: {
				chunks: 'initial', // Specifies which chunks will be selected for optimization
				minSize: 20000, // Minimum size for a chunk to be generated
				minRemainingSize: 0,
				minChunks: 1, // Minimum number of chunks that must share a module before splitting
				maxAsyncRequests: 30, // Maximum number of parallel requests when on-demand loading
				maxInitialRequests: 30, // Maximum number of parallel requests at an entry point
				enforceSizeThreshold: 100000, // Size threshold to enforce splitting
				cacheGroups: {
					vendors: {
						test: /[\\/]node_modules[\\/]/,
						chunks: 'initial',
						name: 'vendors',
						enforce: true,
						maxSize: 100000,
						priority: 10,
						minSize: 20000,
						minChunks: 1,
						reuseExistingChunk: true,
					},
					default: {
						minChunks: 1, // Minimum number of chunks that must share a module before splitting
						priority: -20,
						reuseExistingChunk: true,
					},
				},
			},
		};

		return config;
	},
});

export default nextConfig;

/* -------------------------------------------------------------------------- */
/*                             no package aliasing                            */
/* -------------------------------------------------------------------------- */

// /** @type {import('next').NextConfig} */

// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
// 	enabled: process.env.ANALYZE === 'true',
// });

// const nextConfig = {
// 	output: 'export',
// 	productionBrowserSourceMaps: false,
// 	experimental: {
// 		optimizePackageImports: [
// 			'@react-three/drei',
// 			'@react-three/fiber',
// 			'@studio-freight/react-lenis',
// 			'three',
// 			'three-custom-shader-material',
// 		],
// 	},
// 	images: {
// 		unoptimized: true,
// 	},
// };

// export default withBundleAnalyzer(nextConfig);
