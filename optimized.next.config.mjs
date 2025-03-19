/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.BUILD_TYPE === 'local' ? undefined : 'export',
  webpack: (config, { isServer }) => {
    // Add the YAML loader rule
    config.module.rules.push({
      test: /\.yaml$/,
      use: 'yaml-loader',
    });

    // 优化打包大小
    config.optimization = {
      ...config.optimization,
      minimize: true,
    };

    // 分割代码块，优化加载
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 20000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // 获取npm包名称
            // 添加空值检查，防止module.context为null或undefined
            if (!module.context) return 'vendor';
            
            const match = module.context.match(/[\\/]node_modules[\\/]([^\\/]+)/);
            // 添加匹配结果检查，确保match不为null
            return match ? `npm.${match[1].replace('@', '')}` : 'vendor';
          },
        },
      },
    };

    return config;
  },
  images: {
    unoptimized: true,
  },
  // 启用压缩
  compress: true,
  // 启用静态优化
  reactStrictMode: true,
  // 启用增量静态再生成
  experimental: {
    optimizeCss: true,
  },
  // 配置缓存
  onDemandEntries: {
    // 页面保持在内存中的时间（毫秒）
    maxInactiveAge: 60 * 1000,
    // 同时保持在内存中的页面数
    pagesBufferLength: 5,
  },
};

export default nextConfig;