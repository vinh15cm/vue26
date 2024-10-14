import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "./components/routes"

createApp(App).use.mount('#app')

// khoi tao ung dung
const app = createApp(App)

// su dung cac tien ich ben ngoai
app.use(router);

// gan vao giao dien #app
app.mount("#app")
