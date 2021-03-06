// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import '@/style/reset.css'
import '@/style/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/iconfont/iconfont'
// Vue.config.productionTip = false
/* eslint-disable no-new */
import store from '@/store'
Vue.use(ElementUI);
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
});
