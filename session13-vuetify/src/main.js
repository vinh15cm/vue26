import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import "vuetify/styles"// style cho cac component
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

// khoi tao ung dung
const app = createApp(App)

const vuetify=createVuetify({
    components:components,
    directives:directives,
    icons:{
        defaultSet:'mdi',
        aliases,
        sets:{
            mdi,
        },
    }
}
)
app.use(vuetify)
app.mount('#app')

