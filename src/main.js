import Vue from 'vue'
import VueResource from 'vue-resource';
import VueStyleLoader from 'vue-style-loader'
import { SimpleAlerts } from "@filipedp/simple_dialog";
import { SimpleConfirms } from "@filipedp/simple_dialog";
import VueSession from 'vue-session'
import router from './router'
import App from './App'
var $ = require('jquery');
window.$ = $;

Vue.use(VueSession);
Vue.use(VueResource);
Vue.use(VueStyleLoader);

Vue.config.productionTip = false;
/* global mixin */
Vue.mixin({
    data: function () {
        return {
            db_url: "http://localhost:8015/",
            defaultPath: "#/",
            SimpleAlerts: SimpleAlerts,
            SimpleConfirms: SimpleConfirms,
        }
    },
    methods: {
        logout: function(){
            this.$session.destroy();
            $("#app").removeClass();
            this.$router.push({ path: "home" });
        }
    }
});
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
})
