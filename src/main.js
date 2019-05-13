// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 导入了本地文件App.vue
import App from './App'
import router from './router'

import store from './store'
Vue.config.productionTip = false

// /* eslint-disable no-new */
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
