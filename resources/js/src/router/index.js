import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: () => import('../views/CatalogView.vue')
        },
        {
            // Лучше использовать слаг
            path: '/catalog/:id(\\d+)',
            name: 'product',
            component: () => import('../views/ProductView.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('../views/CartView.vue')
        },
        {
            path: '/news',
            name: 'news',
            component: () => import('../views/NewsView.vue')
        },
        {
            // Лучше использовать слаг
            path: '/news/:id(\\d+)',
            name: 'article',
            component: () => import('../views/ArticleView.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import('../views/LogoutView.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: () => import('../views/NotFoundView.vue')
        },
    ]
})

export default router
