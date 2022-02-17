// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import Vue plugin
// import VueSvgInlinePlugin from "vue-svg-inline-plugin"

// import polyfills for IE if you want to support it
// import "vue-svg-inline-plugin/src/polyfills"

// Vue.use(VueSvgInlinePlugin)

// use Vue plugin with options
// Vue.use(VueSvgInlinePlugin, {
//   attributes: {
//     data: [ "src" ],
//     remove: [ "alt" ]
//   }
// })

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render (h) {
    return h(App)
  }
})
