import Vue from 'vue'
import ElementUI from 'element-ui'
import VueCarousel from 'vue-carousel'
import App from './App.vue'
import router from './router'
import store from './store'

import api from './api'

import imageViewer from 'image-viewer-vue'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/style.scss'

import locale from 'element-ui/lib/locale/lang/ua'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(imageViewer)
Vue.use(VueCarousel)
Vue.use(ElementUI, {locale})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAlSW6HZ7BMefZCtIUpCZ1BOOeZngyl4r4',
    libraries: 'visualization',
  },
})

Vue.config.productionTip = false

Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
