import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");
const aliasObj = require('./vue.alias');


export default defineConfig({
  plugins: [vue()]
})

module.exports = {
  chainWebpack: (config) => {
    for (let aliasName in aliasObj) {
      config.resolve.alias.set(aliasName , aliasObj[aliasName] );
    }

    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({ /* ... */ });
  }
};
