
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'IndexPage', component: () => import('pages/IndexPage.vue') },
      { path: 'BibliPage', name: 'BibliPage', component: () => import('pages/BibliPage.vue') },
      // { path: 'GuardPage', name: 'GuardPage', component: () => import('pages/GuardPage.vue') },
      // { path: 'NotifiPage', name: 'NotifiPage', component: () => import('pages/NotifiPage.vue') },
      { path: 'AcercaPage', name: 'AcercaPage', component: () => import('pages/AcercaPage.vue') },
      // { path: '', name: 'ajaxP', component: () => import('../components/ajax.vue') },
      // { path: '', name: 'blogP', component: () => import('../components/blog.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
