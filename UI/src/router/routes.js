
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Editor.vue') }, //in <page></page>
      // { path: 'training', component: () => import('pages/Index') } //in <page></page>
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
