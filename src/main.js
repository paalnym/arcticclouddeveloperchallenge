import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueAnalytics from 'vue-analytics';

Vue.use(BootstrapVue);
Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-132867434-1',
  router
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
