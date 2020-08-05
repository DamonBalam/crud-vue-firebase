import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: () => import(/* webpackChunkName: "Inicio" */ '../views/Inicio.vue'),
    },
    {
        path: '/editar/:id',
        name: 'Editar',
        component: () => import(/* webpackChunkName: "Editar" */ '../views/Editar.vue'),
    },
    {
        path: '/agregar',
        name: 'Agregar',
        component: () => import(/* webpackChunkName: "Agregar" */ '../views/Agregar.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
