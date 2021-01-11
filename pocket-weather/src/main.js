import { createApp } from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from './router/router.js';
import App from './App.vue';

// import style
import '../scss/index.scss';

createApp(App)
  .use(router, Vuex, axios)
  .mount('#app');