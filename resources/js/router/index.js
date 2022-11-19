import { createRouter, createWebHistory } from "vue-router";

/** router define */
const routes = [{
    path: '',
    component: () => import('../views/admin/layout.vue'),
    beforeEnter: checkAuth,
    children: [
       
        // ------------------ADMIN PORTION------------------
        { path: '/dashboard', name: 'dashboard', component: () => import('./../views/admin/dashboard.vue') },
        { path: '/admin', name: 'admin.index', component: () => import('./../views/admin/admin/index') },
        { path: '/admin/create', name: 'admin.create', component: () => import('./../views/admin/admin/create') },
        { path: '/admin/:id', name: 'admin.show', component: () => import('./../views/admin/admin/view') },
        { path: '/admin/:id/edit', name: 'admin.edit', component: () => import('./../views/admin/admin/create') },
       

    ],
},

]

/** check auth login / not */
function checkAuth(to, from, next) {
    let role = localStorage.getItem('role')
    let user = localStorage.getItem('user')
    if (role && user) {
        next()
    } else {
        window.location.href = "/";
    }
}

/** router initial */
const router = createRouter({
    history: createWebHistory(process.env.MIX_VUE_ROUTER_BASE),
    scrollBehavior() {
        window.scrollTo(0, 0);
    },
    linkExactActiveClass: "active",
    routes
});

export default router;