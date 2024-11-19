const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";
const withTM = require("next-transpile-modules")([
  "pdfequips-navbar",
  "pdfequips-open-graph",
  "pdfequips-footer"
]);

module.exports = withTM({
  typescript: {
    ignoreBuildErrors: true, // If you want to bypass type checking
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "node_modules")],
  },
  transpilePackages: [
    'pdfequips-footer',
    'pdfequips-navbar',
    'pdfequips-open-graph'
  ],
  assetPrefix: isProd ? "/image-tools" : "",
  output: "export",
  webpack: (config, { isServer }) => {
    // Only run this configuration on the client side
    if (!isServer) {
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
          vendors: false,
          // vendor chunk
          vendor: {
            // sync + async chunks
            chunks: "all",
            // import file path containing node_modules
            test: /node_modules/,
            // name of the chunk
            name: "vendor",
          },
        },
      };
    }


    // Minify JavaScript
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimize = true;
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            // Add any necessary terser options here
          },
        })
      );
    }
    // enable top level await
    config.experiments = { ...config.experiments, topLevelAwait: true };

    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      // 'react': require.resolve('react'),
      // 'react-dom': require.resolve('react-dom')
    };

    // Add your additional webpack configuration here if needed

    return config;
  },
});