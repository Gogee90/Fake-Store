import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios';


axios.defaults.baseURL = 'https://gogee90.pythonanywhere.com/api'
axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('token')}`;


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
