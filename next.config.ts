import type { Configuration } from 'webpack';

const nextConfig = {
  webpack(config: Configuration) {
    if (!config.module?.rules) {
      return config;
    }

    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
