import { createWebHistory, createRouter } from "vue-router";
// import Register from "@/views/RegisterPage.vue";
import Login from "@/views/LoginPage.vue";
import AdminUser from "@/views/user/AdminUser.vue";
import Product from "@/views/product/AdminProduct.vue";
import OrderManager from "@/views/order/OrderManager.vue";



const routes = [
    {
        path: "/",
        name: "login",
        component: Login,
    },

    {
        path: "/admin",
        name: "adminpage",
        component: AdminUser,
    },

    //user
    {
        path: "/admin/user/user/:id",
        name: "contact.edit",
        component: () => import("@/views/user/UserEdit.vue"),
        props: true
    },
    //Product
    {
        path: "/admin/product",
        name: "productadmin",
        component: Product,
    },
    {
        path: "/admin/product/addproduct",
        name: "product.add",
        component: () => import("@/views/product/ProductAdd.vue"),
        props: true
    },
    {
        path: "/admin/product/addproduct/:id",
        name: "product.edit",
        component: () => import("@/views/product/ProductEdit.vue"),
        props: true
    },
    {
        path: "/admin/order",
        name: "order",
        component: OrderManager,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    // {
    //     path: "/contacts/:id",
    //     name: "contact.edit",
    //     component: () => import("@/views/ContactEdit.vue"),
    //     props: true // Truyền các biến trong $route.params vào làm props
    // },

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;