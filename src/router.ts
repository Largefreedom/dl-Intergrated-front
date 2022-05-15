import {createRouter,createWebHashHistory} from 'vue-router'


const routes = [
    {
        path: '/hello-world',
        component:()=> import('@/components/HelloWorld.vue')
    },
    {
        path: '/paddle-ocr',
        component:()=> import('@/page/paddle/textOcrPage.vue')
    }
]


const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;