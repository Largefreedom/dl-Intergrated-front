import {createRouter,createWebHashHistory} from 'vue-router'


const routes = [

    {
        path: '/',
        component: ()=>import('@/layout/MainContent.vue'),
        children: [
            {
                path: '/hello-world',
                component:()=> import('@/components/HelloWorld.vue')
            },
            {
                path: '/paddle-ocr',
                component:()=> import('@/page/paddle/textOcrPage.vue')
            },

            {
                path: '/html-editor',
                name:'HTML-EDITOR',
                component:()=> import('@/page/editor/htmlEditor.vue')
            },
        ]
    },
    
]


const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;