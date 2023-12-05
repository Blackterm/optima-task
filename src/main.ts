
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from "@/core/plugins/i18n";
import store from "./store";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import "@/core/plugins/yup";
import ApiService from "@/core/services/ApiService";


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'sweetalert2/src/sweetalert2.scss'

const app = createApp(App)
initVeeValidate();
app.use(router);
app.use(store);
ApiService.init(app);
app.use(i18n);
app.mount('#app')
