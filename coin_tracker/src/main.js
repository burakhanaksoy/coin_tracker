import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import VueApexCharts from 'vue-apexcharts'
Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
}).$mount('#app')