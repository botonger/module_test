const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const deps = require('./package.json').dependencies;

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  devServer: {
    port: process.env.VUE_APP_PORT || 3002,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  // publicPath 있어야 오류 안남
  //Uncaught (in promise) ChunkLoadError: Loading chunk node_modules_vue_dist_vue_runtime_esm-bundler_js-_49481 failed.
  publicPath: 'auto',
  configureWebpack: {
    //없으면 오류 발생
    //remoteEntry.js:1978 Uncaught (in promise) ChunkLoadError: Loading chunk node_modules_vue_dist_vue_runtime_esm-bundler_js-_49480 failed.
    optimization: {
      splitChunks: false,
    },
    plugins: [
        new webpack.container.ModuleFederationPlugin({
          name: 'layouts',
          filename: 'remoteEntry.js',
          remotes: {
            'Federation': 'Federation@http://localhost:3001/remoteEntry.js'
          },
          exposes: {
            './Header.vue': './src/components/HeaderComp.vue',
            './Side.vue': './src/components/SideComp.vue',
            './Modal.vue': './src/components/ModalTemplate.vue',
          },
          shared: {
            ...deps,
            vue: {
              singleton: true,
              // eager: true,
            },
          },
        }),
    ],
  },
  transpileDependencies: true
})
