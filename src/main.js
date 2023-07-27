import {
    createApp
} from 'vue'
// import './style.css'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import BackToTop from 'vue-backtotop'
import feather from 'feather-icons'

feather.replace();

createApp(App)
    .use(router)
    .use(BackToTop)
    .mount('#app');

const appTheme = localStorage.getItem('theme');