import { createApp } from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '@/router/router';
import App from './App.vue';

createApp(App)
  .use(router, Vuex, axios)
  .mount('#app');