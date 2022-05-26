import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import {quillEditor,Quill} from 'vue3-quill'
// import customQuillModule from 'customQuillModule'
// Quill.register('modules/customQuillModule', customQuillModule)



const app = createApp(App)
app.use(quillEditor)
nprogress.configure({showSpinner: false})

router.beforeEach((to, from, next) => {
    nprogress.start()
    next();
    nprogress.done()
    
});

app.use(router)
app.use(ElementPlus)


app.mount('#app')
