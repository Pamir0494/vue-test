
import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router/router";
import 'bootstrap/dist/css/bootstrap.css';
const app=createApp(App);

app.use(router).mount('#app')
import 'popper.js/dist/popper';
