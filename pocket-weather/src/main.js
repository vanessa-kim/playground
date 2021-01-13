import { createApp } from 'vue';
import { store } from './store';
import App from './App.vue';
import router from './router/router.js';

// import style
import '../scss/index.scss';

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');