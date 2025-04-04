/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.BUILD_TYPE === 'local' ? undefined : 'export',
  webpack: (config, { isServer }) => {
    // Add the YAML loader rule
    config.module.rules.push({
      test: /\.yaml$/,
      use: 'yaml-loader',
    });

    return config;
  },
  images: {
    unoptimized: true,
  }
};

export default nextConfig;