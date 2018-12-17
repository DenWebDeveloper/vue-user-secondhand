import Vue from 'vue'
import ElementUI from 'element-ui'
import VueCarousel from 'vue-carousel'
import App from './App.vue'
import router from './router'
import store from './store'

import api from './api'

import imageViewer from 'image-viewer-vue'
Vue.use(imageViewer)

import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/style.scss'

import locale from 'element-ui/lib/locale/lang/ua'

Vue.use(VueCarousel)
Vue.use(ElementUI, {locale})

Vue.config.productionTip = false

Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
