const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {path: '', component: () => import('pages/WelcomePage.vue')},
            {path: 'training/:id', component: () => import('pages/Training.vue')}, //in <page></page>
        ]
    },
    
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        // component: () => import('pages/Error404.vue')
    }
]

export default routes
