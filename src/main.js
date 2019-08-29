import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';
import VueSession from 'vue-session'
import VueStyleLoader from 'vue-style-loader'

Vue.use(VueSession)
Vue.use(VueResource);
Vue.use(VueStyleLoader);
Vue.config.productionTip = false

/* global mixin */
Vue.mixin({
    data: function () {
        return {
            db_url: "http://localhost:8015/"
        }
    },
    methods: {
    }
});
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
})
