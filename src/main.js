import Vue from 'vue';
import VueResource from 'vue-resource';

/* */

import router from './router';
import store from './store';

/* */

import App from './App.vue';

require('material-colors/dist/colors.var.css');

/* */

Vue.use(VueResource);

/* */

Vue.component('app-button', () => ({ component: import('@/components/AppButton.vue') }));
Vue.component('app-icon', () => ({ component: import('@/components/AppIcon.vue') }));
Vue.component('app-tooltip', () => ({ component: import('@/components/AppTooltip.vue') }));

/* */

Vue.config.productionTip = false;

/* */

new Vue({

    router,
    store,
    render: h => h(App),

}).$mount('#app');
